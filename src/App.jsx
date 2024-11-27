import { useState } from 'react'
import './sharepad.css';
import './App.css';
import { readData, writeData, updateData } from './Database';


function App() {

    const [link, setLink] = useState([]);
    const [message, setMessage] = useState("");
    const [text, setText] = useState("");
    const [docId, setDocId] = useState("");

    const checkLink = async(link) => {

        let flag = 0;
        if(link == "") {
            setMessage("Enter a valid link.")
        }
        else {
            const dat = await readData("links");
            const links = dat.docs.map(doc => [doc.data(), doc.id]);
            for(let i = 0; i < links.length; i++) {
                if(link == links[i][0].uniqueLink) {
                    setDocId(links[i][1]);
                    setText(links[i][0].text);
                    flag = 1;
                    break;
                }
            }
            if(flag == 0) {
                const newData = {
                    text: "Begin now....",
                    uniqueLink: link
                };
                setDocId(writeData("links", newData));
            }
        }
    }

    const updateTextData = async() => {
        const newData = {
            text: text,
            uniqueLink: link
        };
        updateData("links", docId, newData);
    }


    return (
    <div className=''>
        {docId ? 
            <div className='sharepad'>
            {/* <div className="users">
                <h1>Users</h1>
                <div className='usernames'>
                    <h3>Vincent</h3>
                    <h3>Dishan</h3>
                    <h3>Shashank</h3>
                    <h3>Shashwath</h3>
                </div>
            </div> */}
                <div className="textarea">
                    <textarea className='text' spellCheck="false" defaultValue={text} onChange={(e) => setText(e.target.value)}></textarea>
                    <button className='btn' onClick={() => updateTextData()}>Save</button>
                </div>
            </div>
        :
        <div className='main'>
            <div className="hero main">
                <h1 className='title'>SHAREPAD</h1>
                <p className='description typewriter'>Share text with other peers with the same link.</p>
            </div>
            <div className='pageinput'>
                <div className="pageinput-box">
                    <h2 className='input-text url'>sharepad.com/</h2>
                    <input className='input-text' onChange={(e) => setLink(e.target.value)}  placeholder='your-page'/>
                </div>
                <button className='go-btn' onClick={() => checkLink(link)}>Go!</button>
            </div>
            <p className='message'>{message}</p>
            <div className="footer">
                <h2 className='footer-title'>PBL 3rd Sem project CS-ICB by ~</h2>
                <div className='names'>
                    <h3 className='name'>Dishan</h3>
                    <h3 className='name'>Shashank</h3>
                    <h3 className='name'>Shashwath</h3>
                    <h3 className='name'>Vincent</h3>
                </div>
                <p className='copyright'>© 2024-25</p>
            </div>
        </div> }
    </div>
)
}

export default App

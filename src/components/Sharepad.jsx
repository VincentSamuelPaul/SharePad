import React from 'react';
import '../sharepad.css';

const Sharepad = ({ data }) => {

    const data_ = localStorage.getItem("data");

    console.log(data_.text);

    return (
        <div className='sharepad'>
            <div className="users">
                <h1>Users</h1>
                <div className='usernames'>
                    <h3>Vincent</h3>
                    <h3>Dishan</h3>
                    <h3>Shashank</h3>
                    <h3>Shashwath</h3>
                </div>
            </div>
            <div className="textarea">
                <textarea className='text' spellCheck="false"></textarea>
                <button className='btn'>Save</button>
            </div>
        </div>
    )
}

export default Sharepad
import { useState } from 'react'
import MainPage from './components/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sharepad from './components/Sharepad';


function App() {

  const [user, setUser] = useState([]);
  const [link, setLink] = useState([]);
  const [data, setData] = useState();

  return (
    <div className=''>
      {/* <div className='main'> */}
          {/* <MainPage/> */}
      {/* </div> */}
      <BrowserRouter>
          <Routes>
            <Route path='*' element={<MainPage link={link} setLink={setLink} data={data} setData={setData}/>} exact/>
            <Route path='/sharepad' Component={Sharepad} link={link} data={data} setData={setData}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

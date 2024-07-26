import './App.css';
import Navbar from './components/Navbar';
import Bodycontent from './components/Bodycontent';
import About from './components/About';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('white');
  const [hdcolor, setHdcolor] = useState('grey');

  const modeHandler = () => {
    setMode(prevMode => (prevMode === 'white'? 'rgb(90, 85, 85)' : 'white'));
    setHdcolor(prevMode => (prevMode === 'white'? 'grey' : 'white'))
  };

  return (
    <div className="app" style={{backgroundColor: mode}}>
      <Navbar mode={mode} toggle={modeHandler} />
      <Routes>
      <Route path='/' element={<Bodycontent mode={mode} hdcolor={hdcolor}/>}/>
      <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

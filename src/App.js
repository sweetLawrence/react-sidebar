

import { useState } from 'react';
import './App.css';
import Backdrop from './Components/Backdrop';
import Sidebar from './Components/Sidebar';
import Toolbar from './Components/Toolbar';

function App() {
  const [sidebar,setSidebar] = useState(false);
  const toggle = ()=>{
    setSidebar((prevState)=>!prevState)
  }
  return (
    <div className="App">
      <Toolbar openSideBar = {toggle}/>
      <Backdrop />
      <Sidebar sidebar = {sidebar}/>
      
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
    </div>
  );
}

export default App;

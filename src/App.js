import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search'
const URL = "https://api.spacexdata.com/v3/launches?limit=100"
const THEME_SECONDARY = "#f77f00";

function App() {
  return (
    <div>
    <div className="App" style={{ color: THEME_SECONDARY  }}>
      <header>
        <right>
        <h1>SpaceX Launch Program</h1>
        </right>
      </header>
     
    </div>
     <Search/>
    
     </div>
  );
}

export default App;

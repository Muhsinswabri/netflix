import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/banner/banner';
import {orginals,action, ComedyMovies} from './urls'
import './App.css'
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action Movies' isSmall/>
      <RowPost url={ComedyMovies} title='Action Movies' isSmall/>
    </div>
  );
}

export default App;
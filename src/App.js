import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import NewBeer from './components/NewBeer/NewBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import listBeers from './components/ListBeers/listBeers';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/" element={<RandomBeer/>}></Route>
        <Route path="/" element={<NewBeer/>}></Route>
        <Route path="/" element={<AllBeer/>}></Route>
      </Routes>

    </div>
  );
}

export default App;

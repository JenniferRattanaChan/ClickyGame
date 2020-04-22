import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import CardList from './components/CardList'

let imageArray = ["aang.png","appa.png","azula.png","bumi.png","iroh.png","katara.png","mai.png","momo.png","sokka.png","toph.png","tylee.png","zuko.png"]

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <div className="container">
          <CardList list={imageArray}></CardList>
      </div>
    </div>
  );
}

export default App;

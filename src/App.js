import React, {Component} from 'react';
import {render} from 'react-dom';
import './App.css';

// import jQuery from './jquery.js'
// import './main.js'
import Header from './components/header/header.js';
import Credo from './components/credo/credo.js';
import Studio from './components/studio/studio.js';
import Development from './components/development/development.js';
import Footer from './components/footer/footer.js';


class App extends Component {
render(){
  return (

    <div className="App">
      <Header />
      <Studio />
      <Credo />
      <Development />
      <Footer />
      <script src="./jquery.js"></script>
      <script src="./spincrement.js"></script>
      <script src="./main.js"></script>
    </div>
  );
}}

export default App;

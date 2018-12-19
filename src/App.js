import React, { Component } from 'react';
import './css/App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Posts />
        <Footer />
      </div>
    );
  }
}

export default App;

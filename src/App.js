import React, { Component } from 'react';
import './css/App.css';
import Menu from './components/Menu'; //import del Menu
import Footer from './components/Footer'; //import del footer
import Posts from './components/Posts'; //import dei posts

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu /> {/*stampa del menu*/}
        <Posts /> {/*stampa dei posts*/}
        <Footer /> {/*stampa del footer*/}
      </div>
    );
  }
}

export default App;

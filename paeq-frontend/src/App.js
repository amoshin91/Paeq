import React from 'react';
import './styles/App.css';
import Header from './components/Header'
import Project from './components/Project'
import About from './components/About'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div id="container">
        <Header />

        <Switch>
          <Route path='/about' component={ About } />
          <Route path='/project' component={ Project } />
        </Switch>

        <Footer />
      </div>
    </div>
  );
}

export default App;

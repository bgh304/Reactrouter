import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from './Contact';
import About from './About';
import Navigator from './Navigator';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigator />
          

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </div>
  );
  /*<Link to="/">Home</Link>{' '}
          <Link to="/contact">Contact</Link>{' '}
          <Link to="/about">About</Link>*/
}

export default App;
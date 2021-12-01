import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './Pages/Portfolio/Portfolio';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


function App() {
  
  return (
    <div className="App bg">
      
  );
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/">
          <Home/>
          </Route>
          <Route path="/home">
          <Home/>
          </Route>
          <Route path="/portfolio">
          <Portfolio/>
          </Route>
          <Route path="/about">
          <About/>
          </Route>
          <Route path="/contact">
          <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

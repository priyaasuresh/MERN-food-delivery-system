import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Final from './pages/Final';
import { SideBtnWrap } from './components/Sidebar/SidebarElements';

function App() {
  return (
    <Router>
      
      <SideBtnWrap/>
      <Switch>
        <Route path='/s' exact component={Signup}/>
      </Switch>
      <GlobalStyle />
      <Hero />
      <Feature />
      <Products />
      <Switch>
        <Route path='/final' exact component={Final}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

 /* <Switch>
        <Route path='/Cart' exact component={Cart}/>
        </Switch>*/
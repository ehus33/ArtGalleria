import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Marketplace from './components/Marketplace';
import CreateNFT from './components/CreateNFT';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/create-nft" component={CreateNFT} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailPost from './components/DetailPost/DetailPost';
import Posts from './components/Posts/Posts';
import CreatePost from './components/CreatePost/CreatePost';
import EditPost from './components/EditPost/EditPost';
import Header from './components/Headers/Header';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/create/" exact component={CreatePost} />
          <Route path="/:id/" exact component={DetailPost} />
          <Route path="/:id/edit/" exact component={EditPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
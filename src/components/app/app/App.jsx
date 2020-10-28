import React from 'react';
import CharacterList from '../characters/CharacterList';
import CharacterDetail from '../character-detail/CharacterDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterList}>

          </Route>
          <Route path="/detail/:id" component={CharacterDetail}>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

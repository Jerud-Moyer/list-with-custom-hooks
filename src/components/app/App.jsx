import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from './characters/CharacterList';
import CharacterDetail from './character-detail/CharacterDetail';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route exact path="/characters/:id" component={CharacterDetail} />
        </Switch>
      </Router>
    </div>
  );
}

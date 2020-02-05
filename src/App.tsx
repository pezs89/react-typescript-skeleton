import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { History } from 'history';

import StreamCreate from './components/StreamCreate'
import StreamList from './components/StreamList'
import Header from './components/Header';
import StreamWrapper from './components/StreamWrapper';
import Notify from './components/Notify';

interface MainProps {
  history: History;
}

const App: React.FC<MainProps> = ({ history }): JSX.Element => {
  return (
    <div>
      <Router history={history}>
        <div className="container">
          <Notify />
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/:type/:id" exact render={(props) => <StreamWrapper {...props} />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
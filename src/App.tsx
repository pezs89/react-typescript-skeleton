import React from 'react';
import { Router, Route } from 'react-router-dom';
import { History } from 'history';

import StreamCreate from './components/StreamCreate'
import StreamDelete from './components/StreamDelete'
import StreamEdit from './components/StreamEdit'
import StreamList from './components/StreamList'
import StreamShow from './components/StreamShow'
import Header from './components/Header';

interface MainProps {
  history: History;
}

const App: React.FC<MainProps> = ({ history }): JSX.Element => {
  return (
    <div>
      <Router history={history}>
        <div className="container">
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
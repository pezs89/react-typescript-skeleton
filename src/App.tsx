import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { History } from 'history';

import StreamCreate from './components/StreamCreate'
import StreamList from './components/StreamList'
import Header from './components/Header';
import StreamWrapper, { StreamWrapperType } from './components/StreamWrapper';

interface MainProps {
  history: History;
}

const App: React.FC<MainProps> = ({ history }): JSX.Element => {
  return (
    <div>
      <Router history={history}>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact render={(props)=> <StreamWrapper {...props} type={StreamWrapperType.EDIT}/>} />
            <Route path="/streams/delete/:id" exact render={(props)=> <StreamWrapper {...props} type={StreamWrapperType.DELETE}/>} />
            <Route path="/streams/:id" exact render={(props)=> <StreamWrapper {...props} type={StreamWrapperType.SHOW}/>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
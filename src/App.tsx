import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './components/StreamCreate'
import StreamDelete from './components/StreamDelete'
import StreamEdit from './components/StreamEdit'
import StreamList from './components/StreamList'
import StreamShow from './components/StreamShow'
import Header from './components/Header';
import { connect } from 'react-redux';
import { loadStreamsAsync } from './store/features/streams/actions';
import { loadStreams } from './services/streams-api';

const dispatchProps = {
  loadStreams: loadStreamsAsync.request
}

type Props = typeof dispatchProps;

const App: React.FC = ({ loadStreams }: any): JSX.Element => {
  loadStreams('streams');

  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, dispatchProps)(App);
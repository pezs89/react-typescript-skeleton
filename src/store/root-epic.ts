import { combineEpics } from 'redux-observable';

import * as streamsEpics from './features/streams/epics';

export default combineEpics(...Object.values(streamsEpics));

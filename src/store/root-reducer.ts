import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { streamsReducer } from './features/streams/reducer';
import { authReducer } from './features/auth/reducer';

const rootReducer = combineReducers({
  streams: streamsReducer,
  auth: authReducer,
  form: formReducer
});

export default rootReducer;

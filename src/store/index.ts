import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './features/index';
import thunk from 'redux-thunk';

export const configureStore = (initialState: any) => {
  const middleWares = applyMiddleware(thunk);
  const store = createStore(rootReducer, initialState, middleWares);
  return store;
};

import { combineReducers } from 'redux';

import work from '../Work/reducer';

const rootReducer = combineReducers({
  work
});

export default rootReducer;
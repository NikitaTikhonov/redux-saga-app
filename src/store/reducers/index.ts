import exampleReducer from '_store/reducers/exampleReducer';

import { combineReducers } from  'redux';

const rootReducer = combineReducers({
  examples: exampleReducer
});

export default rootReducer;

import {combineReducers} from 'redux';

import HomeReducer from './HomeReducer';
import {FEarning, FSpending, FetchSEdata} from './OverViewReducer';
import eaReducer from './eaReducer';

const allReducer = combineReducers({
  FEarning,
  FSpending,
  FetchSEdata,
  eaReducer,
});

export default allReducer;

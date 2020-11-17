import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import markets from './markets';
import trades from './trades';

export default combineReducers({
  alert,
  markets,
  auth, 
  trades
});

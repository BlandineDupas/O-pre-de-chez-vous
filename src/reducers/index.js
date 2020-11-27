import { combineReducers } from 'redux';
import counter from './counter';
import auth from './auth';
import register from './register';
// import form from './form';
import nav from './nav';
import carte from './carte';
import itineraries from './itineraries';
import producers from './producers';
import tags from './tags';
import users from './users';
import messages from './messages';
import productAdd from './productAdd';
import itineraryAdd from './itineraryAdd';

export default combineReducers({
  counter,
  auth,
  register,
  // form,
  nav,
  carte,
  itineraries,
  producers,
  tags,
  users,
  messages,
  productAdd,
  itineraryAdd,
});

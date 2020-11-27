// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import register from 'src/middleware/register';
import auth from 'src/middleware/auth';
import carte from 'src/middleware/carte';
import itineraries from 'src/middleware/itineraries';
import producers from 'src/middleware/producers';
import tags from 'src/middleware/tags';
import products from 'src/middleware/products';
import users from 'src/middleware/users';
import messages from 'src/middleware/messages';
import itineraryAdd from 'src/middleware/itineraryAdd';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // logMiddleware,
    // secondMiddleware,
    register,
    auth,
    carte,
    itineraries,
    producers,
    tags,
    products,
    users,
    // messages,
    itineraryAdd,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;

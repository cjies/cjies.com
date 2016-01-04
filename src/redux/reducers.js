// *************************************
//
//   Reducers
//
// *************************************

import { combineReducers } from 'redux';
import { TOGGLE_NAV } from './actions';


// -------------------------------------
//   Navigation Active
// -------------------------------------

function navActive(state = false, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return !state;
    default:
      return state;
  }
}


// -------------------------------------
//   Comnbine Reducers
// -------------------------------------

const appReducers = combineReducers({
  navActive
});

export default appReducers;

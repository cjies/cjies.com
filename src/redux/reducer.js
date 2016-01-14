// *************************************
//
//   Reducers
//
// *************************************

  import { combineReducers } from 'redux';


// -------------------------------------
//   Modules
// -------------------------------------

  import navigation from './modules/navigation';
  import sections from './modules/sections';
  import portfolio from './modules/portfolio';

// -------------------------------------
//   Combine Reducers
// -------------------------------------

  export default combineReducers({
    navigation,
    sections,
    portfolio
  });

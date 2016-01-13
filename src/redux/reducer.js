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


// -------------------------------------
//   Combine Reducers
// -------------------------------------

  export default combineReducers({
    navigation,
    sections
  });

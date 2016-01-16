// *************************************
//
//   Reducers
//
// *************************************

  import { combineReducers } from 'redux';
  import { reducer as form } from 'redux-form';


// -------------------------------------
//   Modules
// -------------------------------------

  import navigation from './modules/navigation';
  import sections from './modules/sections';
  import portfolio from './modules/portfolio';
  import contact from './modules/contact';


// -------------------------------------
//   Combine Reducers
// -------------------------------------

  export default combineReducers({
    navigation,
    sections,
    portfolio,
    form,
    contact
  });

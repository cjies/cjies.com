// *************************************
//
//   Sections Actions
//
// *************************************

// -------------------------------------
//   Action Types
// -------------------------------------

  const SET_RESPONSE_MSG = 'SET_RESPONSE_MSG';
  const CLEAR_RESPONSE_MSG = 'CLEAR_RESPONSE_MSG';


// -------------------------------------
//   Initial State
// -------------------------------------

  const initialState = {
    responseMsg: null,
    responseType: null,
  };


// -------------------------------------
//   Reducer
// -------------------------------------

  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case SET_RESPONSE_MSG:
        return {
          ...state,
          responseMsg: action.responseMsg,
          responseType: action.responseType
        };
      case CLEAR_RESPONSE_MSG:
        return {
          ...state,
          responseMsg: null,
          responseType: null
        };
      default:
        return state;
    }
  }


// -------------------------------------
//   Action Creators
// -------------------------------------

  // Set Response Msg
  export function setResponseMsg(responseMsg, responseType) {
    return {
      type: SET_RESPONSE_MSG,
      responseMsg,
      responseType
    };
  }

  // Clear Response Msg
  export function clearResponseMsg() {
    return {
      type: CLEAR_RESPONSE_MSG
    };
  }

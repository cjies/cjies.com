// *************************************
//
//   Portfolio Actions
//
// *************************************

// -------------------------------------
//   Action Types
// -------------------------------------

  const SHOW_DETAIL = 'SHOW_DETAIL';
  const HIDE_DETAIL = 'HIDE_DETAIL';

// -------------------------------------
//   Initial State
// -------------------------------------

  const initialState = {
    clientX: 0,
    clientY: 0,
    show: false,
    data: {}
  };


// -------------------------------------
//   Reducer
// -------------------------------------

  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case SHOW_DETAIL:
        return {
          ...state,
          clientX: action.clientX,
          clientY: action.clientY,
          data: action.data,
          show: true
        };
      case HIDE_DETAIL:
        return {
          ...state,
          show: false
        };
      default:
        return state;
    }
  }


// -------------------------------------
//   Action Creators
// -------------------------------------

  // Show Portfolio Detail
  export function showDetail(data, clientX, clientY) {
    return {
      type: SHOW_DETAIL,
      data, clientX, clientY
    };
  }

  // Hide Portfolio Detail
  export function hideDetail() {
    return {
      type: HIDE_DETAIL,
    };
  }

// *************************************
//
//   Navigation Actions
//
// *************************************

// -------------------------------------
//   Action Types
// -------------------------------------

  const TOGGLE_NAV = 'TOGGLE_NAV';
  const STICKY_HEADER = 'STICKY_HEADER';
  const UNSTICKY_HEADER = 'UNSTICKY_HEADER';


// -------------------------------------
//   Initial State
// -------------------------------------

  const initialState = {
    active: false,
    sticky: false
  };


// -------------------------------------
//   Reducer
// -------------------------------------

  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case TOGGLE_NAV: {
        // Get current active state
        const { active } = state;
        return {
          ...state,
          active: !active
        };
      }
      case STICKY_HEADER:
        return {
          ...state,
          sticky: true
        };
      case UNSTICKY_HEADER:
        return {
          ...state,
          sticky: false
        };
      default:
        return state;
    }
  }


// -------------------------------------
//   Action Creators
// -------------------------------------

  // Toggle Navigation
  export function toggleNav() {
    return {
      type: TOGGLE_NAV
    };
  }

  // Sticky Header
  export function stickyHeader() {
    return {
      type: STICKY_HEADER
    };
  }

  // Unsticky Header
  export function unstickyHeader() {
    return {
      type: UNSTICKY_HEADER
    };
  }

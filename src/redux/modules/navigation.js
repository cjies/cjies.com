// *************************************
//
//   Navigation Actions
//
// *************************************

// -------------------------------------
//   Action Types
// -------------------------------------

  const TOGGLE_NAV = 'TOGGLE_NAV';


// -------------------------------------
//   Initial State
// -------------------------------------

  const initialState = {
    active: false
  };


// -------------------------------------
//   Reducer
// -------------------------------------

  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case TOGGLE_NAV:
        // Get current active state
        const { active } = state;
        return {
          ...state,
          active: !active
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

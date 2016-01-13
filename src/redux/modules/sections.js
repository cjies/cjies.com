// *************************************
//
//   Sections Actions
//
// *************************************

// -------------------------------------
//   Action Types
// -------------------------------------

  const ENABLE_PARALLAX = 'ENABLE_PARALLAX';
  const DISABLE_PARALLAX = 'DISABLE_PARALLAX';


// -------------------------------------
//   Initial State
// -------------------------------------

  const initialState = {
    parallax: true
  };


// -------------------------------------
//   Reducer
// -------------------------------------

  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case ENABLE_PARALLAX:
        return {
          ...state,
          parallax: true
        };
      case DISABLE_PARALLAX:
        return {
          ...state,
          parallax: false
        };
      default:
        return state;
    }
  }


// -------------------------------------
//   Action Creators
// -------------------------------------

  // Enable Parallax Effect
  export function enableParallax() {
    return {
      type: ENABLE_PARALLAX
    };
  }

  // Disable Parallax Effect
  export function disableParallax() {
    return {
      type: DISABLE_PARALLAX
    };
  }

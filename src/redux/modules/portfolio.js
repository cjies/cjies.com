// *************************************
//
//   Portfolio Actions
//
// *************************************

// -------------------------------------
//   Action Types
// -------------------------------------

  const SHOW_MODAL = 'SHOW_MODAL';
  const HIDE_MODAL = 'HIDE_MODAL';


// -------------------------------------
//   Initial State
// -------------------------------------

  const initialState = {
    backdropStartX: 0,
    backdropStartY: 0,
    modalData: {},
    modalShow: false
  };


// -------------------------------------
//   Reducer
// -------------------------------------

  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case SHOW_MODAL:
        return {
          ...state,
          backdropStartX: action.backdropStartX,
          backdropStartY: action.backdropStartY,
          modalData: action.modalData,
          modalShow: true
        };
      case HIDE_MODAL:
        return {
          ...state,
          modalData: {},
          modalShow: false
        };
      default:
        return state;
    }
  }


// -------------------------------------
//   Action Creators
// -------------------------------------

  // Show Portfolio Detail
  export function showModal(modalData, backdropStartX, backdropStartY) {
    return {
      type: SHOW_MODAL,
      modalData, backdropStartX, backdropStartY
    };
  }

  // Hide Portfolio Detail
  export function hideModal() {
    return {
      type: HIDE_MODAL,
    };
  }

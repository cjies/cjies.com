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

  const SET_FILTER = 'SET_FILTER';
  const SHOW_MORE = 'SHOW_MORE';
  const SET_LIMIT = 'SET_LIMIT';

  const ENABLE_HOVER = 'ENABLE_HOVER';
  const DISABLE_HOVER = 'DISABLE_HOVER';


// -------------------------------------
//   Initial State
// -------------------------------------

  const initialState = {
    backdropStartX: 0,
    backdropStartY: 0,
    modalData: {},
    modalShow: false,
    filterType: 'ALL',
    showMore: false,
    itemLimit: 6,
    hover: true
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
      case SET_FILTER:
        return {
          ...state,
          filterType: action.filterType
        };
      case SHOW_MORE:
        return {
          ...state,
          showMore: true
        };
      case SET_LIMIT:
        return {
          ...state,
          itemLimit: action.itemLimit
        };
      case ENABLE_HOVER:
        return {
          ...state,
          hover: true
        };
      case DISABLE_HOVER:
        return {
          ...state,
          hover: false
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
      type: HIDE_MODAL
    };
  }

  // Set Visibility Filter
  export function setFilter(filterType) {
    return {
      type: SET_FILTER,
      filterType
    };
  }

  // Show More
  export function showMore() {
    return {
      type: SHOW_MORE
    };
  }

  // Set limitation for visible item
  export function setLimit(itemLimit) {
    return {
      type: SET_LIMIT,
      itemLimit
    };
  }

  // Enable hover transition
  export function enableHover() {
    return {
      type: ENABLE_HOVER
    };
  }

  // Disable hover transition
  export function disableHover() {
    return {
      type: DISABLE_HOVER
    };
  }

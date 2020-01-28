import {
  POST_EVENT,
  GET_EVENTS,
  DELETE_EVENT,
  EDIT_EVENT
} from "../Actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_EVENT:
      return { ...state, items: [...state.items, action.payload] };
    case GET_EVENTS:
      return { ...state, items: action.payload };
    case DELETE_EVENT:
      const copyState = [...state.items].filter(e => e.id !== action.id);
      console.log(copyState);
      return { ...state, items: copyState };
    default:
      return state;
  }
};

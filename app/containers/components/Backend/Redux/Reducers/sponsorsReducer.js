import {
  POST_SPONSOR,
  GET_SPONSORS,
  DELETE_SPONSOR,
  EDIT_SPONSOR
} from "../Actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_SPONSOR:
      return { ...state, items: [...state.items, action.payload] };
    case GET_SPONSORS:
      return { ...state, items: action.payload };
    case DELETE_SPONSOR:
      const copyState = [...state.items].filter(e => e.id !== action.id);
      console.log(copyState);
      return { ...state, items: copyState };
    default:
      return state;
  }
};

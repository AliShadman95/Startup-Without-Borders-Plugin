import {
  POST_PARTNER,
  GET_PARTNERS,
  DELETE_PARTNER,
  EDIT_PARTNER
} from "../Actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_PARTNER:
      return { ...state, items: [...state.items, action.payload] };
    case GET_PARTNERS:
      return { ...state, items: action.payload };
    case DELETE_PARTNER:
      const copyState = [...state.items].filter(e => e.id !== action.id);
      console.log(copyState);
      return { ...state, items: copyState };
    default:
      return state;
  }
};

import {
  POST_SPEAKER,
  GET_SPEAKERS,
  DELETE_SPEAKER,
  EDIT_SPEAKER
} from "../Actions/types";

const initialState = { items: [], item: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_SPEAKER:
      return { ...state, items: [action.payload, ...state.items] };
    case GET_SPEAKERS:
      return { ...state, items: action.payload };
    case EDIT_SPEAKER:
      let copy = [...state.items];
      let editedSpeakerIndex = copy.findIndex(e => e.id === action.payload.id);
      copy.splice(editedSpeakerIndex, 1, action.payload);
      return { ...state, items: copy };
    case DELETE_SPEAKER:
      const copyState = [...state.items].filter(e => e.id !== action.id);
      console.log(copyState);
      return { ...state, items: copyState };
    default:
      return state;
  }
};

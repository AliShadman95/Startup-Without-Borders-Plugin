import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer.js";
import sponsorsReducer from "./sponsorsReducer.js";
import speakersReducer from "./speakersReducer.js";
import partnersReducer from "./partnerReducer.js";

export default combineReducers({
  events: eventsReducer,
  sponsors: sponsorsReducer,
  speakers: speakersReducer,
  partners: partnersReducer
});

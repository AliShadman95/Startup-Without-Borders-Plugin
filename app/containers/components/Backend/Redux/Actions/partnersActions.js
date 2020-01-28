import {
  GET_PARTNERS,
  POST_PARTNER,
  DELETE_PARTNER,
  EDIT_PARTNER
} from "./types";
import axios from "axios";
var WPAPI = require("wpapi");

let wp = new WPAPI({
  endpoint: window.wpr_object.api_url,
  nonce: window.wpr_object.api_nonce
});

//Registering the route
var namespace = "wp/v2";
var route = "/partner/(?P<id>)";
wp.partner = wp.registerRoute(namespace, route);

export const getPartners = () => async dispatch => {
  console.log("about to fetch");
  const response = await wp.partner().get();
  console.log(response);
  dispatch({ type: GET_PARTNERS, payload: response });
};

/* export const getLatestMessages = room => async dispatch => {
  const response = await axios.get(
    `https://chat-by-as.herokuapp.com/messages/latest/${room}`
  );

  dispatch({ type: GET_MESSAGES, payload: response.data.reverse() });
}; */

/* export const postMessage = user => async dispatch => {
  console.log("about to POST");
  const response = await axios.post(
    `https://chat-by-as.herokuapp.com/messages`,
    user
  );
  dispatch({ type: POST_MESSAGE, payload: response.data });
};

export const emitMessage = message => async dispatch => {
  console.log("about to EMIT");
  dispatch({ type: POST_MESSAGE, payload: message });
};

export const setMessage = user => async dispatch => {
  console.log("about to SET");
  dispatch({ type: POST_MESSAGE, payload: user });
};

export const deleteMessage = id => async dispatch => {
  console.log("about to delete", id);

  const response = await axios.delete(
    `https://chat-by-as.herokuapp.com/messages/id/${id}`
  );

  dispatch({ type: DELETE_MESSAGE, id: id });
};

export const editMessage = (id, message) => async dispatch => {
  console.log("about to edit");
  const response = await axios.put(
    `https://chat-by-as.herokuapp.com/messages/id/${id}`,
    {
      message
    }
  );

  dispatch({ type: EDIT_MESSAGE, id: id, message });
};

export const searchMessage = (room, value, type) => async dispatch => {
  const str = type === 0 ? `${value}` : `room/${room}/${value}`;
  const response = await axios.get(
    `https://chat-by-as.herokuapp.com/messages/search/${str}`
  );

  dispatch({ type: SEARCH_MESSAGE, payload: response.data });
};
 */

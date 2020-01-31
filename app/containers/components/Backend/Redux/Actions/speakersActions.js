import {
  GET_SPEAKERS,
  POST_SPEAKER,
  DELETE_SPEAKER,
  EDIT_SPEAKER
} from "./types";

var WPAPI = require("wpapi");

let wp = new WPAPI({
  endpoint: window.wpr_object.api_url,
  nonce: window.wpr_object.api_nonce
});

//Registering the route
var namespace = "wp/v2";
var route = "/speaker/(?P<id>)";
wp.speaker = wp.registerRoute(namespace, route);

export const getSpeakers = () => async dispatch => {
  console.log("about to fetch");
  const response = await wp.speaker().get();
  console.log(response);
  dispatch({ type: GET_SPEAKERS, payload: response });
};

export const createSpeaker = (title, imageId, status) => async dispatch => {
  console.log("about to POST");
  const response = await wp
    .speaker()
    .create({ title, featured_media: imageId, status });
  dispatch({ type: POST_SPEAKER, payload: response });
};

export const editSpeaker = (id, title, imageId, status) => async dispatch => {
  console.log("about to edit");
  const response = await wp
    .speaker()
    .id(id)
    .update({ title, featured_media: imageId, status });

  dispatch({ type: EDIT_SPEAKER, payload: response });
};

/*


export const deleteMessage = id => async dispatch => {
  console.log("about to delete", id);

  const response = await axios.delete(
    `https://chat-by-as.herokuapp.com/messages/id/${id}`
  );

  dispatch({ type: DELETE_MESSAGE, id: id });
};
*/

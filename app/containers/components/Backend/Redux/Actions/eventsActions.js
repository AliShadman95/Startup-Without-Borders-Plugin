import { GET_EVENTS, POST_EVENT, DELETE_EVENT, EDIT_EVENT } from "./types";
import axios from "axios";
var WPAPI = require("wpapi");

let wp = new WPAPI({
  endpoint: window.wpr_object.api_url,
  nonce: window.wpr_object.api_nonce
});

var namespace = "wp/v2";
//Event
var route = "/event/(?P<id>)";
wp.event = wp.registerRoute(namespace, route, {
  params: ["author"]
});

export const getEvents = () => async dispatch => {
  console.log("about to fetch");
  const response = await wp.event().get();
  console.log(response);
  dispatch({ type: GET_EVENTS, payload: response });
};

export const addEvent = (
  chapter,
  title,
  description,
  image,
  meta,
  status
) => async dispatch => {
  console.log("about to POST");
  const response = await wp.event().create({
    title,
    excerpt: description,
    chapter,
    featured_media: image,
    meta,
    status
  });
  dispatch({ type: POST_EVENT, payload: response });
};

export const deleteEvent = id => async dispatch => {
  console.log("about to delete", id);

  await wp
    .event()
    .id(id)
    .delete();

  dispatch({ type: DELETE_EVENT, id: id });
};

export const editEvent = (
  id,
  chapter,
  title,
  description,
  image,
  meta,
  status
) => async dispatch => {
  console.log("about to edit");

  const response = await wp
    .event()
    .id(id)
    .update({
      title,
      slug: title,
      description,
      chapter,
      featured_media: image,
      meta,
      status
    });

  console.log(response);

  dispatch({
    type: EDIT_EVENT,
    payload: response
  });
};

var WPAPI = require("wpapi");

let wp = new WPAPI({
  endpoint: window.wpr_object.api_url,
  nonce: window.wpr_object.api_nonce
});

//This register all the routes for the CUSTOM POST TYPES
export const registerRoutes = () => {
  var namespace = "wp/v2";
  //Event
  var route = "/event/(?P<id>)";
  wp.event = wp.registerRoute(namespace, route, {
    params: ["author"]
  });
  //Sponsor
  var route = "/sponsor/(?P<id>)";
  wp.sponsor = wp.registerRoute(namespace, route);
  //Partner
  var route = "/partner/(?P<id>)";
  wp.partner = wp.registerRoute(namespace, route);
  //Speaker
  var route = "/speaker/(?P<id>)";
  wp.speaker = wp.registerRoute(namespace, route);
  //Chapter
  var route = "/chapter/(?P<id>)";
  wp.chapter = wp.registerRoute(namespace, route);
};

//Create a post type based on the "type" param
export const createPostType = async (
  type,
  chapter,
  title,
  image,
  meta,
  status
) => {
  switch (type) {
    case "Event":
      try {
        const data = await wp.event().create({
          title,
          chapter,
          featured_media: image,
          meta,
          status
        });
        return data;
      } catch (error) {
        console.log(error);
      }
      break;
    case "Speaker":
      try {
        await wp.speaker().create({
          title,
          featured_media: image,
          status
        });
      } catch (error) {
        console.log(error);
      }
      break;
    case "Sponsor":
      try {
        await wp.sponsor().create({
          title,
          featured_media: image,
          status
        });
      } catch (error) {
        console.log(error);
      }
      break;
    case "Partner":
      try {
        await wp.partner().create({
          title,
          featured_media: image,
          status
        });
      } catch (error) {
        console.log(error);
      }
      break;
    case "Chapter":
      try {
        await wp.chapter().create({
          name: title,
          slug: title
        });
      } catch (error) {
        console.log(error);
      }
      break;
  }
};

//Get a post type based on the "type" param
export const getPostType = async type => {
  switch (type) {
    case "Event":
      try {
        const data = await wp.event().get();
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
    case "Speaker":
      try {
        const data = await wp.speaker().get();
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
      break;
    case "Sponsor":
      try {
        const data = await wp.sponsor().get();
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
      break;
    case "Partner":
      try {
        const data = await wp.partner().get();
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
      break;
    case "Chapter":
      try {
        const data = await wp.chapter().get();
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
  }
};

//Update a post type based on the "type" param
export const updatePostType = async (type, id, title, image, meta, status) => {
  switch (type) {
    case "Event":
      try {
        await wp
          .event()
          .id(id)
          .update({ title, slug: title, featured_media: image, meta, status });
      } catch (error) {
        console.log(error);
      }
      break;
    case "Speaker":
      try {
        await wp
          .speaker()
          .id(id)
          .update({ title, featured_media: image, status });
      } catch (error) {
        console.log(error);
      }
      break;
    case "Sponsor":
      try {
        await wp
          .sponsor()
          .id(id)
          .update({ title, featured_media: image, status });
      } catch (error) {
        console.log(error);
      }
      break;
    case "Partner":
      try {
        await wp
          .partner()
          .id(id)
          .update({ title, featured_media: image, status });
      } catch (error) {
        console.log(error);
      }
      break;
    case "Chapter":
      try {
        await wp.chapter.id(id).update({ title, slug: title });
      } catch (error) {
        console.log(error);
      }
  }
};

//Delete a post type based on the "type" param
const deletePostType = async (type, id) => {
  switch (type) {
    case "Event":
      try {
        await wp
          .event()
          .id(id)
          .delete();
      } catch (error) {
        console.log(error);
      }
      break;
    case "Speaker":
      try {
        await wp
          .speaker()
          .id(id)
          .delete();
      } catch (error) {
        console.log(error);
      }
      break;
    case "Sponsor":
      try {
        await wp
          .sponsor()
          .id(id)
          .delete();
      } catch (error) {
        console.log(error);
      }
      break;
    case "Partner":
      try {
        await wp
          .partner()
          .id(id)
          .delete();
      } catch (error) {
        console.log(error);
      }
      break;
    case "Chapter":
      try {
        await wp
          .chapter()
          .id(id)
          .delete();
      } catch (error) {
        console.log(error);
      }
  }
};

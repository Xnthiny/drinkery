import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("api/users" + id);
  },
  // Gets the crawls with the given id
  getCrawls: function(id) {
    return axios.get("/api/crawls/" + id);
  },
};

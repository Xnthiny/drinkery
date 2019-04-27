import axios from "axios";

export default {
  // Gets all books
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("api/users" + id);
  },
  // Gets the crawls with the given id
  getCrawls: function (id) {
    return axios.get("/api/crawls/" + id);
  },
  // Gets data from foursquare
  searchFoursquare: function (city) {
    return axios.get(`https://api.foursquare.com/v2/venues/search?near=${city}&client_id=2X5YCFV5202JAW03C4G30KCEAEGFJ4PRAMQR4PKRZ1H0N3EP&client_secret=VDCVPJ5ICVR1HHSX2RGPEYI0RUANA40HVCC21I0A1VK254EB&v=https://api.foursquare.com/v2/venues/search?near=miami&client_id=2X5YCFV5202JAW03C4G30KCEAEGFJ4PRAMQR4PKRZ1H0N3EP&client_secret=VDCVPJ5ICVR1HHSX2RGPEYI0RUANA40HVCC21I0A1VK254EB&v=20120609`);
  }
};

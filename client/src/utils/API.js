import axios from "axios";

export default {
  // Gets all books
  getUsers: function () {
    return axios.get("/api/users");
  },
  saveCrawl: function(data) {
    return axios.post("http://localhost:5000/api/users/newcrawl", data)
  },
  searchCrawl: function(crawlID) {
    return axios.get("http://localhost:5000/api/users/crawl/" + crawlID)
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("http://localhost:5000/api/users/" + id);
  },
  // Gets the crawls with the given id
  login: function(userData) {
    return axios.post("http://localhost:5000/api/users/login", userData)
  },
  // Makes post request to userController and begins login logic
  register: function(userData) {
    return axios.post("http://localhost:5000/api/users/register", userData);
  },
  getCrawls: function (id) {
    return axios.get("/api/crawls/" + id);
  },
  // Gets data from foursquare
  searchFoursquare: function (city) {
    return axios.get(`https://api.foursquare.com/v2/venues/search?near=${city}&client_id=2X5YCFV5202JAW03C4G30KCEAEGFJ4PRAMQR4PKRZ1H0N3EP&client_secret=VDCVPJ5ICVR1HHSX2RGPEYI0RUANA40HVCC21I0A1VK254EB&v=https://api.foursquare.com/v2/venues/search?near=miami&client_id=2X5YCFV5202JAW03C4G30KCEAEGFJ4PRAMQR4PKRZ1H0N3EP&client_secret=VDCVPJ5ICVR1HHSX2RGPEYI0RUANA40HVCC21I0A1VK254EB&v=20120609&categoryId=4bf58dd8d48988d11d941735&limit=15`);
  },
  searchForPhoto: function (venueID) {
    return axios.get(`https://api.foursquare.com/v2/venues/${venueID}/photos?&client_id=2X5YCFV5202JAW03C4G30KCEAEGFJ4PRAMQR4PKRZ1H0N3EP&client_secret=VDCVPJ5ICVR1HHSX2RGPEYI0RUANA40HVCC21I0A1VK254EB&v=20120609`)
  }
};

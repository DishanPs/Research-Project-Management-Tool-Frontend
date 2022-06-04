const axios = require("axios");

const functions = {
  fetchUser: () =>
    axios
      .get("https://research-project-management.herokuapp.com/subtype")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = functions;

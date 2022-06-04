const axios = require("axios");

const CreateMarkingScheme = {
    getDocumentMarkings: () =>
    axios
      .get("https://research-project-management.herokuapp.com/subtype")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = CreateMarkingScheme;
const axios = require("axios");

const ResearchGroupsStudents = {
  getGroups: () =>
    axios
      .get("https://research-project-management.herokuapp.com/group")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = ResearchGroupsStudents;

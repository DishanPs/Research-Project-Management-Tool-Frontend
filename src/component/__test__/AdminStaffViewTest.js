const axios = require("axios");

const AdminStaffViewTest = {
  getAdminStaffViews: () =>
    axios
      .get("https://research-project-management.herokuapp.com/staff")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = AdminStaffViewTest;

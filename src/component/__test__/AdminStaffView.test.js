const AdminStaffViewTest = require('./AdminStaffViewTest');

test("User fetched Link name should be in list", async () => {
  expect.assertions(1);
  const data = await AdminStaffViewTest.getAdminStaffViews();
  expect("Nalaka").toEqual("Nalaka");
});
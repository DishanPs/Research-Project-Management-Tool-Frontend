const ResearchGroupsStudents = require('./ResearchGroupsStudentsTest');

test("User fetched Link name should be in list", async () => {
  expect.assertions(1);
  const data = await ResearchGroupsStudents.getGroups();
  expect("Kamal").toEqual("Kamal");
});

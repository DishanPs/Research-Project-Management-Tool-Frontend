const CreateMarkingScheme = require('./CreateMarkingSchemeTest');

test("User fetched Link name should be in list", async () => {
    expect.assertions(1);
    const data = await CreateMarkingScheme.getDocumentMarkings();
    expect("Final Thesis").toEqual("Final Thesis");
  });
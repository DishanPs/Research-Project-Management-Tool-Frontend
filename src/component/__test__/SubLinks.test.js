const functions = require('./SubLinksTest');

test("User fetched Link name should be in list", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect("Presentation Slide Link").toEqual("Presentation Slide Link");
});

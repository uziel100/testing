describe("Set of tests", () => {
  beforeAll(() => {
    console.log("--- beforeAll ---");
  });

  afterAll(() => {
    console.log("--- afterAll ---");
  });

  beforeEach(() => {
    console.log("*** beforeEach ***");
  });

  afterEach(() => {
    console.log("---- afterEach ----");
  });

  test("case 1", () => {
    console.log("case 1");
    expect(1 + 1).toBe(2);
  });

  describe("other group", () => {
    beforeAll(() => {
      console.log("--- beforeAll ---");
    });

    test("case 2", () => {
      console.log("case 2");
      expect(1 + 1).toBe(2);
    });
  });
});

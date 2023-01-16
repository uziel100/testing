describe("Test file 04-assertions", () => {
  test("should first", () => {
    const data = { name: "Uziel" };
    data.lastName = "Hernandez";
    expect(data).toEqual({ name: "Uziel", lastName: "Hernandez" });
  });

  test("should null", () => {
    const data = null;
    expect(data).toBeNull();
    expect(data).toBeDefined();
    expect(data).not.toBeUndefined();
  });

  test("booleans", () => {
    expect(true).toEqual(true);
    expect(false).toEqual(false);

    expect("").toBeFalsy();
    expect(0).toBeFalsy();
    expect(false).toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(-0).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  test("Strings", () => {
    expect("uziel hernandez").toMatch(/nandez/);
  });

  test("arrays", () => {
    const numbers = [1, 3, 4, 5, 6];
    expect(numbers).toContain(3);
  });
});

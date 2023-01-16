const Person = require("./06-person");

describe("class Person", () => {
  let person;

  beforeEach(() => {
    person = new Person("Uziel", 70, 1.73);
  });

  test("should create a Person", () => {
    person.setWeight(80);
    person.setHeight(1.72);
    expect(person).toBeDefined();
  });

  test('should return "down" if IMC is lower than 18 and higher 0', () => {
    // AAA
    // Arrange / Given
    person.setWeight(50);
    person.setHeight(1.85);
    // Act / When
    const imc = person.calcIMC();
    // Assert / Then
    expect(imc).toBe("down");
  });

  test('should return "normal" if IMC is between 18 and 24', () => {
    person.setWeight(70);
    person.setHeight(1.72);
    expect(person.calcIMC()).toBe("normal");
  });

  test('should return "overweight" if IMC is between 25 and 26', () => {
    person.setWeight(76);
    person.setHeight(1.72);
    expect(person.calcIMC()).toBe("overweight");
  });

  test('should return "overweight level 1" if IMC is between 27 and 29', () => {
    person.setWeight(80);
    person.setHeight(1.72);
    expect(person.calcIMC()).toBe("overweight level 1");
  });

  test('should return "overweight level 2" if IMC is between 30 and 39', () => {
    person.setWeight(96);
    person.setHeight(1.72);
    expect(person.calcIMC()).toBe("overweight level 2");
  });

  test('should return "overweight level 3" if IMC is higher than 40', () => {
    person.setWeight(130);
    person.setHeight(1.72);
    expect(person.calcIMC()).toBe("overweight level 3");
  });

  test("should throw erorr when weight is lower or equal 0", () => {
    expect(() => {
      person.setWeight(-2);
      person.setHeight(1.72);
    }).toThrow("Weight invalid");
  });
});

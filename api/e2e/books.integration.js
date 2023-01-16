const request = require("supertest");

const mockGetAll = jest.fn();
const mockCreate = jest.fn();

jest.mock("../src/lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: mockCreate,
  }))
);

const createApp = require("../src/app");
const { generateManyBook, generateBook } = require("../src/fakes/book.fake");

describe("Test e2e books", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("Test fot [GET] /books", () => {
    test("should return list books", () => {
      // Arrange
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      //  Act
      return request(app)
        .get("/api/v1/books")
        .expect(200)
        .then(({ body }) => {
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });

  describe("Test fot [POST] /books", () => {
    test("should return a created book", () => {
      // Arrange
      const fakeBook = generateBook();
      mockCreate.mockResolvedValue(fakeBook);
      //  Act
      return request(app)
        .post("/api/v1/books")
        .expect(201)
        .then(({ body }) => {
          // Assert
          expect(body).toEqual(fakeBook);
        });
    });
  });
});

const request = require("supertest");
const createApp = require("../src/app");
const { MongoClient } = require("mongodb");
const { config } = require("../src/config");

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe("Test e2e books", () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe("Test fot [GET] /books", () => {
    test("should return list books", async () => {
      // Arrange
      const seedData = await database.collection("books").insertMany([
        {
          name: "Book1",
          year: 1998,
          author: "nicolas",
        },
        {
          name: "Book2",
          year: 1998,
          author: "nicolas",
        },
      ]);
      console.log(seedData);
      //  Act
      return request(app)
        .get("/api/v1/books")
        .expect(200)
        .then(({ body }) => {
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });

  // describe("Test fot [POST] /books", () => {
  //   test("should return a created book", () => {
  //     // Arrange
  //     const fakeBook = generateBook();
  //     mockCreate.mockResolvedValue(fakeBook);
  //     //  Act
  //     return request(app)
  //       .post("/api/v1/books")
  //       .expect(201)
  //       .then(({ body }) => {
  //         // Assert
  //         expect(body).toEqual(fakeBook);
  //       });
  //   });
  // });
});

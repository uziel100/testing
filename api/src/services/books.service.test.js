const { generateManyBook } = require("../fakes/book.fake");
const BooksService = require("./books.service");

// Creacomo una funcion mock para poder rastrear
// obtener cuantas veces se llamo, con que parametros etc.
const mockGetAll = jest.fn();

/**
  Aqui se hace un mock de la libreria mongo.lib, para sustituir
  los metodos que se utilizan ya que esta libreria se conecta
  directamente a la BD, es un forma de hacer unit testing de caja negra
*/
jest.mock("../lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);

describe("Test for BooksService", () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    // Buena practica limpiar todos los mocks en cada test
    jest.clearAllMocks();
  });

  describe("Test for getBooks", () => {
    test("should resturn a list book", async () => {
      // Arrange
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });

    test("should return a book", async () => {
      // Arrange
      const fakeBooks = generateManyBook(1);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(books[0].name).toEqual(fakeBooks[0].name);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });
  });
});

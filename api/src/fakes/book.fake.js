const { faker } = require("@faker-js/faker");

const generateBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBook = (limit = 10) => {
  return new Array(limit).fill("0").map(generateBook);
};

module.exports = {
  generateBook,
  generateManyBook,
};

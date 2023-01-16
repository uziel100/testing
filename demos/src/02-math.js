const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) return null;
  return a / b;
};

module.exports = {
  sum,
  multiply,
  divide,
};

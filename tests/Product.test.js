
const { Product } = require('../src/js/Product');

describe("Product", () => {
  test("sets properties on class", () => {
    expect(new Product('Hannah', 25, true)).toEqual({"name": "Hannah", "price": 25, "taxable": true});
  });

  test("", () => {
    expect(new Product('Kat', 1, false)).toEqual({"name": "Kat", "price": 1, "taxable": false});
  });

//Give a product with a taxable true, getPriceWithTax returns the price + 10%
//use toBeCloseTo with floating point numbers (two test cases with different prices)

test('taxable product returns price + 10%', () => {
  const productWithTax = new Product('shirt', 10, true);
  expect(productWithTax.getPriceWithTax()).toEqual(11);
  const productWithTax2 = new Product('shirt', 3, true);
  expect(productWithTax2.getPriceWithTax()).toBeCloseTo(3.30);
});

//give a product with taxable false
test('non-taxable product returns price', () => {
  const product2 = new Product('pants', 1, false);
  expect(product2.getPriceWithTax()).toBe(1);
});
});
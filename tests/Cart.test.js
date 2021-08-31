const { Cart } = require("../src/js/Cart");
const { Product } = require("../src/js/Product");

  describe("Cart", () => {
    test("constructor sets items to empty array", () => {
      expect(new Cart(this.items)).toEqual({"items": []});
    });

    test("add one product to items array", () => {
      const add = new Cart(this.items)
      expect(add.Cart).toBe(this.items);
    });

    test("add two products to items array", () => {
      const add2 = new Cart(this.items);
      expect(add2.Cart).toBe(this.product * 2)
    })
    
  });
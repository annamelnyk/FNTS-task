import { expect } from "chai";

import { ShoppingCart } from "../lib/ShoppingCart";
import { Product } from "../lib/product";

describe("Shopping cart", () => {
  const apple = new Product("Apple", 4.95);
  const orange = new Product("Orange", 3.99);

  describe("create", () => {
    const shoppingCart = new ShoppingCart();

    it("should contain empty product list", () => {
      expect(shoppingCart.productList).to.be.empty;
    });
  });

  describe("add products", () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addProduct(apple);
    shoppingCart.addProduct(apple);
    shoppingCart.addProduct(orange);

    it("should contain 2 apples and 1 orange", () => {
      expect(shoppingCart.productList).to.have.length(2);
      expect(shoppingCart.productList).to.deep.include(
        { ...apple, amount: 2 },
        { ...orange, amount: 1 }
      );
    });

    it("should calculate total price", () => {
      expect(shoppingCart.totalPrice).to.equal("$13.89");
    });
  });

  describe("remove products", () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addProduct(apple);
    shoppingCart.addProduct(apple);
    shoppingCart.addProduct(apple);
    shoppingCart.removeProduct(apple);

    it("should contain 2 apples", () => {
      expect(shoppingCart.productList).to.have.length(1);
      expect(shoppingCart.productList).to.deep.include({ ...apple, amount: 2 });
    });

    it("should calculate total price", () => {
      expect(shoppingCart.totalPrice).to.equal("$9.90");
    });
  });
});

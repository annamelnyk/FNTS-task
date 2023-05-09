import { extractPriceNumber, convertPriceToAUDCurrency } from './utils';

export class ShoppingCart {
  productList = [];
  constructor() {
    this.totalPrice = 0;
  }

  get productList() {
    return this.productList;
  }

  calculateTotalPrice() {
    const totalAmount = this.productList.reduce(
      (acc, productItem) => acc + productItem.amount * extractPriceNumber(productItem.price),
      0
    );

    this.totalPrice = convertPriceToAUDCurrency(totalAmount);
  }

  findProduct(productItem) {
    return this.productList.find(({ name }) => productItem.name === name);
  }

  addProduct(productItem) {
    const selectedProductItem = this.findProduct(productItem);

    if (selectedProductItem) {
      this.productList.map((product) =>
        product.name === selectedProductItem.name
          ? (product.amount += 1)
          : product
      );
    } else {
      this.productList.push({ ...productItem, amount: 1 });
    }

    this.calculateTotalPrice();
  }

  removeProduct(productItem) {
    const selectedProductItem = this.findProduct(productItem);

    if (selectedProductItem) {
      if (selectedProductItem.amount > 1) {
        this.productList.map((product) =>
          product.name === selectedProductItem.name
            ? (product.amount -= 1)
            : product
        );
      } else {
        this.productList.splice(productItem, 1);
      }
    }

    this.calculateTotalPrice();
    return this.productList;
  }
}

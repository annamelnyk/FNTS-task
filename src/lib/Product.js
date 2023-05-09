import { convertPriceToAUDCurrency } from "./utils";

export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = convertPriceToAUDCurrency(price);
  }
}

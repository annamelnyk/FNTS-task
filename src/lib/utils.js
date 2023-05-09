export function extractPriceNumber(price) {
  return parseFloat(price.replace(/[^\d\.]/, ""));
}

export function convertPriceToAUDCurrency(price) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(price);
}

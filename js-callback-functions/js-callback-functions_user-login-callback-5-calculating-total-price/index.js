const products = [
  { name: "Saffron", price: 50 },
  { name: "Cinnamon", price: 6 },
  { name: "Cardamom", price: 12 },
  { name: "Turmeric", price: 9 },
  { name: "Paprika", price: 4 },
  { name: "Garam Masala", price: 10 },
  { name: "Vanilla Bean", price: 15 },
  { name: "Coriander", price: 6 },
];

function extractPrice(product) {
  return product["price"];
}

function calculateTotalPrice(productsArray, extractPriceFunction) {
  let totalPrice = 0;
  for (element of productsArray) {
    // console.log(extractPriceFunction(element));
    totalPrice += extractPriceFunction(element);
  }
  return totalPrice;
}

calculateTotalPrice(products, extractPrice);

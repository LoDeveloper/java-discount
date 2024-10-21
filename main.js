let priceInput = prompt("Enter the price");
let price = parseFloat(priceInput);


let discount = price * 0.10;
let newPrice = price - discount;

console.log("New price: $" + newPrice);

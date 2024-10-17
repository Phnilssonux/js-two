// Enter the price

let price = prompt("Enter Price");

// From string to number

let priceTag = parseFloat(price.replace(`$`,`49.99`))

// Add discount

let discountPrice = priceTag * 0.9;

// New price

console.log(`new price: $` + discountPrice.toFixed(2));
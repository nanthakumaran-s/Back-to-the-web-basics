function calculateDiscount(dayOfWeek) {
  switch (dayOfWeek) {
    case 1:
      return 15;
    case 2:
      return 10;
    case 3:
      return 12;
    case 4:
      return 11;
    case 5:
      return 13;
    case 6:
      return 14;
    case 0:
      return 15;
    default:
      return 0;
  }
}

function calculateDiscountedPrice(originalPrice, discount) {
  const discountAmount = (originalPrice * discount) / 100;
  const discountedPrice = originalPrice - discountAmount;
  return discountedPrice.toFixed(2);
}

const originalPrice = parseFloat(prompt("Enter the price of the product: "));

const discount = calculateDiscount(new Date().getDay());
const discountedPrice = calculateDiscountedPrice(originalPrice, discount);

console.log(`Today's discount is ${discount}%.`);
console.log(`Original price: $${originalPrice}`);
console.log(`Discounted price: $${discountedPrice}`);

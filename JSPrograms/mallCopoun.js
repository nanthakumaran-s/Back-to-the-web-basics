const purchaceHandller = (price) => {
  if (price > 5000) {
    return 3100;
  } else if (price > 3000) {
    return 1600;
  } else if (price > 1000) {
    return 600;
  } else {
    return 100;
  }
};

const visitingHandller = (price) => {
  return price + 100;
};

let balance;

balance = purchaceHandller(parseFloat(prompt("Enter the amount: ")));
console.log(balance);
balance = visitingHandller(balance);
console.log(balance);

/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

// const papaJohns = {
//   name: "Papa John's",
//   slogan: "Better Ingredients. Better Pizza. Papa John's.",
//   cuisines: ["italian", "american", "pizza"],
//   pizzaToppings: {
//     pepperoni: 2,
//     peppers: 0.6,
//     extraCheese: 1.5,
//     olives: 0.5,
//     bacon: 3,
//     extraSauce: 1,
//   },
//   numberOfStars: 3.5,
//   favorited: false,
//   address: "555 Main Street",
//   zipcode: 11234,
//   acceptsReservations: false,
// };

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};
const newAddress = "666 main drive";
const otherSlogan = "come get the shap at papashaqs";

papaJohns.grabCategories = function (papaJohns) {
  return Object.keys(papaJohns);
};

function verifyValues(obj, val) {
  if (Object.values(obj).includes(val)) {
    return true;
  } else {
    return false;
  }
}

function getToppingsInfo(obj) {
  return Object.entries(obj.pizzaToppings);
}

papaJohns.printad = function (pizzaToppings, price) {
  return (
    "Welcome to Papa John's! We are located at 555 Main Street ,This week, we are having a sale on " +
    pizzaToppings +
    " for " +
    price +
    "$. Better Ingredients. Better Pizza. Papa John's."
  );
};

// Object.prototype.printad = function () {
//   return (
//     "Welcome to Papa Johns! We are located at " +
//     this.address +
//     ", This week, we are having a sale on " +
//     Object.keys(this.pizzaToppings).join(", ") +
//     " for " +
//     Object.values(this.pizzaToppings).join(" and ") +
//     "$. " +
//     this.slogan
//   );

papaJohns.ad = function (address, pizzaToppings, price, slogan) {
  return (
    "Welcome to Papa Johns! We are located at " +
    address +
    ", This week, we are having a sale on " +
    pizzaToppings +
    " for " +
    price +
    "$. " +
    slogan
  );
};

console.log(
  papaJohns.ad(
    "666 main drive",
    "extraCheese",
    1,
    "come get the shap at papashaqs"
  )
);

console.log(papaJohns.printad("bacon", 3));

console.log(getToppingsInfo(papaJohns));

console.log(verifyValues(papaJohns, 88989));
console.log(verifyValues(papaJohns, 3.5));

console.log(papaJohns.grabCategories(papaJohns));
console.log(papaJohns.grabCategories(papaJohns.pizzaToppings));

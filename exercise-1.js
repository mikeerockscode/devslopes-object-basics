/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const Freddys = {
  name: "Freddys",
  cuisines: "american food",
  numberOfStars: 2,
  favorited: true,
};

Freddys.address = "my street 123";
Freddys.zipcode = 55546;
Freddys.acceptsReservations = true;

Freddys.numberOfStars = 5;
Freddys.favorited = false;
Freddys.cuisines = "frozen custard";

Freddys.retrieveProperty = function (property) {
  return hasOwnProperty(property)
    ? [property]
    : "the information you requested does not exist";
};
console.log(Freddys.retrieveProperty("cuisines"));
console.log(Freddys.retrieveProperty("favorited"));
console.log(Freddys.retrieveProperty("name"));
console.log(Freddys.retrieveProperty("nickname"));
console.log(Freddys.retrieveProperty("state"));

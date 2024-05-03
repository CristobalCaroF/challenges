console.clear();

// EXERCISE 1
// Create an object personWithNameAgeEmail with the properties "name", "age" and "email".

const personWithNameAgeEmail = {
  name: "Cristobal",
  age: 28,
  email: "cacaro@uc.cl",
};

console.log(personWithNameAgeEmail);

// EXERCISE 2
// Set the values of name and age equal to the corresponding values of the personAlex object.

const personAlex = {
  name: "Alex",
  age: 24,
};

const nameOfAlex = personAlex.name;
const ageOfAlex = personAlex["age"];
console.log("nameOfAlex: ", nameOfAlex);
console.log("ageOfAlex: ", ageOfAlex);

// EXERCISE 3
// Change the value of name to "Alex" and the value of age to "35" by updating the object personToChange: person.existingProperty = newValue.

const personToChange = {
  name: "Kim",
  age: 24,
};

console.log("person to change values: ", personToChange);

personToChange.name = "Alex";
personToChange.age = 35;

console.log("person to change new values: ", personToChange);

// EXERCISE 4
// Add the properties age "5" and breed "husky" to the object petPluto: pet.newProperty = newValue.

const petPluto = {
  name: "Pluto",
  species: "dog",
};

console.log("petPluto original values: ", petPluto);

petPluto.age = 5;
petPluto.breed = "husky";

console.log("petPluto with added values: ", petPluto);

export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};

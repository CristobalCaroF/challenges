export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  let peopleFullNames = [];
  for (const person of people) {
    let fullName = person.firstName + " " + person.lastName;
    peopleFullNames.push(fullName);
  }
  return peopleFullNames;
}

export function getNameAndAge(people) {
  let peopleNameandAge = [];
  for (const person of people) {
    let nameAndAge = person.lastName + " (" + person.age + ")";
    peopleNameandAge.push(nameAndAge);
  }
  return peopleNameandAge;
}

export function getPeopleByAge(people, age) {
  let peopleByAge = [];
  for (let person of people) {
    if (person.age === age) {
      let fullName = person.firstName + " " + person.lastName;
      peopleByAge.push(fullName);
    }
  }
  return peopleByAge;
}

export function getPeopleNamesOlderThan(people, age) {
  let peopleNamesOlderThan = [];
  for (let person of people) {
    if (person.age > age) {
      let fullName = person.firstName + " " + person.lastName;
      peopleNamesOlderThan.push(fullName);
    }
  }
  return peopleNamesOlderThan;
}

export function getPeopleByLastName(people, lastName) {
  let peopleByLastName = [];
  for (let person of people) {
    if (person.lastName === lastName) {
      let fullName = person.firstName + " " + person.lastName;
      peopleByLastName.push(fullName);
    }
  }
  return peopleByLastName;
}

export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

export function getFullNamesSortedByAge(people) {
  let peopleSortedByAge = [];
  const sortedByAge = people.slice().sort((a, b) => a.age - b.age);
  console.log(sortedByAge);
  for (const person of sortedByAge) {
    let fullName = person.firstName + " " + person.lastName;
    peopleSortedByAge.push(fullName);
  }
  return peopleSortedByAge;
}

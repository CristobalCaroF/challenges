function capital(capitalsArray) {
  let sentences = capitalsArray.map((capital, index) => {
    return `The capital of ${capital.state || capital.country} is ${
      capital.capital
    }`;
  });
  console.log(sentences);
  return sentences;
}

const state_capitals = [{ state: "Maine", capital: "Augusta" }];
capital(state_capitals)[0];
//returns "The capital of Maine is Augusta"

const country_capitals = [{ country: "Spain", capital: "Madrid" }];
capital(country_capitals)[0];
// # returns "The capital of Spain is Madrid"

const mixed_capitals = [
  { state: "Maine", capital: "Augusta" },
  { country: "Spain", capital: "Madrid" },
];
capital(mixed_capitals)[0];
// # returns "The capital of Maine is Augusta"

import Chance from "chance";

export default function handler(request, response) {
  console.log("I am in the API Joke on me :D");
  const chance = new Chance();
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };
  response.status(200).json(character);
}

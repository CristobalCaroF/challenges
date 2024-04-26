console.clear();

async function fetchData() {
  try {
    const url = "https://swapi.py4e.com/api/people";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.results);
    console.log(data.results[0]);
    console.log(data.results[2].eye_color);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

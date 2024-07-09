console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchData().then((value) => {
  console.log(value.results[2].eye_color);
});

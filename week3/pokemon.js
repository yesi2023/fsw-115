//Step 1 - get the data
//Step 2 - display the data

const xhr = new XMLHttpRequest();
//Method    // URL                          //Async?
xhr.open("GET", "https://pokeapi.co/api/v2/berry/", true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    showData(data);
  }
};

function showData(data) {
  let pokemonList = data.results;
  console.log(pokemonList);

  for (let i = 0; i < pokemonList.length; i++) {
    let data = document.createElement("h1");
    data.textContent = "Name: " + pokemonList[i].name;
    document.body.appendChild(data);

    const locatorUrl = document.createElement("i");
    locatorUrl.textContent =
      pokemonList[i].name +
      " " +
      "Resource_URL: " +
      " " +
      " " +
      pokemonList[i].url;
    document.body.appendChild(locatorUrl);
  }
}

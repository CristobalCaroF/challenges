console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    star.setAttribute("src", "assets/star-empty.svg");
    starContainer.append(star);
  }

  //--^-- your code here --^--
}

renderStars();

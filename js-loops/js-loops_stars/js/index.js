console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  countFilled = filledStars;
  for (i = 1; i <= 5; i++) {
    if (countFilled > 0) {
      const star = document.createElement("img");
      star.setAttribute("src", "assets/star-filled.svg");
      starContainer.append(star);
      countFilled--;
    } else {
      const star = document.createElement("img");
      star.setAttribute("src", "assets/star-empty.svg");
      starContainer.append(star);
    }
  }

  //--^-- your code here --^--
}

renderStars(3);

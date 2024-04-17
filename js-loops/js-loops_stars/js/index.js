console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  let countFilled = filledStars;
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    if (countFilled > 0) {
      star.setAttribute("src", "assets/star-filled.svg");
      countFilled--;
    } else {
      star.setAttribute("src", "assets/star-empty.svg");
    }
    star.addEventListener("click", (e) => {
      renderStars(i);
    });
    starContainer.append(star);
  }

  //--^-- your code here --^--
}

renderStars(0);

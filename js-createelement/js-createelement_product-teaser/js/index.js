console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

body.innerHTML = `
<article class="product">
<div class="product__body">
  <div class="product__text-container">
    <h2 class="product__name">Anemonefish</h2>
    <ul class="product__categories">
      <li class="product__category">Sea water</li>
      <li class="product__category">Warmer waters</li>
      <li class="product__category">Omnivorous</li>
    </ul>
    <p class="product__description">
      Anemonefish are omnivorous and can feed on undigested food from
      their host anemones. When a sea anemone is not available in an
      aquarium, the anemonefish may settle in some varieties of soft
      corals, or large polyp stony corals.
    </p>
  </div>
  <div class="product__image-container">
    <img
      class="product__image"
      src="https://unsplash.com/photos/rEM3cK8F1pk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bmVtb3xlbnwwfHx8fDE2NTk1MjE1MzA&force=true&w=640"
      alt=""
    />
  </div>
</div>
<footer class="product__footer">
  <span class="product__price">15,99 €</span>
  <button type="button" class="product__buy-button">Buy</button>
</footer>
</article>
`;

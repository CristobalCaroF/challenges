console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  event.target.elements.firstName.focus();
  const ageBadnessSum =
    +event.target.elements.badness.value + +event.target.elements.age.value;

  console.log(
    `The age-badness-sum of ${event.target.elements.firstName.value} is ${ageBadnessSum}`
  );

  event.target.reset();
});

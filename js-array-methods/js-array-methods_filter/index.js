console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  if (card.id === "2") {
    // console.log(card);
    return card;
  }
});

const allCardsWith3Tags = cards.filter((card) => {
  if (card.tags.length === 3) {
    // console.log(card);
    return card;
  }
});

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  if (!card.isBookmarked) {
    // console.log(card);
    return card;
  }
});

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  if (card.tags.find((element) => element === "HTML" || element === "js")) {
    if (card.isBookmarked) {
      // console.log(card);
      return card;
    }
  }
});

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};

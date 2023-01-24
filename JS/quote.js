const quotes = [
  {
    quote: "You can only be young once. But you can always be immature.",
    author: "Dave Barry",
  },
  {
    quote:
      "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
  },
  {
    quote:
      "If I only had an hour to chop down a tree, I would spend the first 45 minutes sharpening my axe.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Let no one ever come to you without leaving better and happier.",
    author: "Mother Teresa",
  },
  {
    quote:
      "It's not that I'm so smart , it's just that I stay with problems longer.",
    author: "Albert Einstein",
  },
  {
    quote: "Only I can change my life. No one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote: "Doing a thing well is often a waste of time.",
    author: "Robert Byrne",
  },
  {
    quote:
      "Persistence is very important. You should not give up unless you are forced to give up.",
    author: "Elon Musk",
  },
  {
    quote: "The journey is the reward.",
    author: "Steve Jobs",
  },
  {
    quote: "Employ thy time well, if thou meanest to get leisure.",
    author: "Benjamin Franklin",
  },
];
const quoteAuthor = document.querySelector("#quote-author");
const quote = document.querySelector("#quote-author span:first-child");
const author = document.querySelector("#quote-author span:last-child");

const quoteRandom = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = quoteRandom.quote;
author.innerText = quoteRandom.author;

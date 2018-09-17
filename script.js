let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
const title = document.querySelector("#main-title");
title.textContent ='Dominic Torreto\'s Website'
console.log(title)
  // Part 2
const body = document.querySelector('body');
body.style.backgroundColor = '#F8F8F8';
console.log(body);
  // Part 3

  // Part 4

  // Part 5

  // Part 6

  // Part 7
});

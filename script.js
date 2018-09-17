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

  function title(){
const title = document.querySelector("#main-title");
title.textContent ='Dominic Torreto\'s Website'
console.log(title)
}
  // Part 2
  function background(){
const body = document.querySelector('body');
body.style.backgroundColor = '#F8F8F8';
console.log(body);
}
  // Part 3
  function favorite(){
const favorite = document.querySelector('#favorite-things')
favorite.lastElementChild.remove()
}

  // Part 4
  function special(){
    const special = document.getElementsByClassName('special-title')
    for (var i =  0; i < special.length; i++) {
      special[i].style.fontSize = '2rem';
    }
}

// const specialTitles = document.getElementsByClassName('special-title');
//     for (let i = 0; i < specialTitles.length; i++) {
//       specialTitles[i].style.fontSize = '2rem';
//     }
  // Part 5

  // Part 6

  // Part 7

  title();
  background();
  favorite();
  special();
});




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
    // console.log(special);
}

// const specialTitles = document.getElementsByClassName('special-title');
//     for (let i = 0; i < specialTitles.length; i++) {
//       specialTitles[i].style.fontSize = '2rem';
//     }
  // Part 5

function chicago(){
// const sideBar = document.querySelector('.side-bar');
let chicagoRace = document.getElementById('past-races').childNodes[7];
// console.log(chicagoRace)
chicagoRace.remove()
// console.log(chicagoRace)
}
let chicagoRace;
// body.removeChild(img)
  // Part 6
  function race(){
    let newRace= document.createElement('li')
    newRace.textContent = 'Hong Kong'

    document.getElementById('past-races').appendChild(newRace);
    // console.log(newRace);
}

// body.appendChild(container)
// container.appendChild(title)```


  // Part 7

  //TRIED REORGANIZING THIS MULTIPLE TIMES BUT CAN'T FIGURE IT OUT
  function blog(){

    document.getElementsByClassName('main').appendChild(newBlog)

  let newBlog = document.createElement('div')
  let title = document.createElement('h1');
  let text = document.createElement('p');



// didn't remember anything about creating text nodes from class but was able to get that from other students
  var paraText = document.createTextNode('There will probably be a movie in Hong Kong soon');
  var titleText = document.createTextNode('Hong Kong');
   newBlog.classList.add('blog post', 'purple')

   // const main = document.querySelector('.main')
      title.appendChild(titleText);
      text.appendChild(paraText);

      // main.appendChild(newBlog);


      newBlog.appendChild(title);
      newBlog.appendChild(text);



  }






  title();
  background();
  favorite();
  special();
  chicago();
  race();
  blog();
});




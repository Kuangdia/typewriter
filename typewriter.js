const sentence = "hello there from lighthouse labs\n";

const myFunc = () => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout( () => {
      process.stdout.write(sentence[i]);
    }, 50 * i);
  }
};

myFunc();




// // Got this code from StackOverflow
// // the timer reference
// let timer;

// // the current index
// let i = 0;

// // you don't need a for loop in setInterval, the function itself is aleady called in iterations, just treat it as a loop iteration.
// function typewriter() {

//   // print the current charater with current index
//   process.stdout.write(sentence[i]);
  
//   // increase the index
//   i++;
  
//   // if the index reaches the maximum text length, cease the timer
//   if(i >= sentence.length) 
//     clearInterval(timer);
// }

// // pass in function, instead of calling it
// timer = setInterval(typewriter, 50);


// function runFiveMiles() {
//     console.log("Go for a five-mile run");
//   }

//   function liftWeights() {
//     console.log("Pump iron");
//   }

//   function swimFortyLaps() {
//     console.log("Swim 40 laps");
//   }

//   function exerciseRoutine(postRunActivity) // 2nd activies as parameter
//   {
//     runFiveMiles();
//     postRunActivity();
//   }

function receivesAFunction(callback) {
     callback();
}

function returnsANamedFunction() {
    return function namedFunc(){};
}

function returnsAnAnonymousFunction() {
    return function(){};
}
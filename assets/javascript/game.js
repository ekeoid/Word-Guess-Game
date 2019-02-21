//JavaScript for Word Game on Dog Breeds

 var car = {
            make: "Honda",
            model: "Fit",
            color: "Blue Raspberry",
            mileage: 3000,
            isWorking: true,

            driveToWork: function () {

                //alert("Old Mileage: " + this.mileage);

                this.mileage = this.mileage + 8;

                //alert("New mileage: " + this.mileage);
            },

            driveAroundWorld: function () {

                //alert("Old Mileage: " + this.mileage);

                this.mileage = this.mileage + 24000;

                //alert("New Mileage: " + this.mileage);
                //alert("Car needs a tuneup!");

                this.isWorking = false;
            },

            getTuneUp: function () {
                //alert("Car is ready to go!");
                this.isWorking = true;
            },

            honk: function () {
                //alert("Honk! Honk!");
            }
        };


        document.onkeyup = function (event) {
            var selection = event.key;

            var textCarMake   = document.getElementById("carMake");
            var textCarModel  = document.getElementById("carModel");
            var textCarColor  = document.getElementById("carColor");
            var textCarMilage = document.getElementById("carMilage");
            var textCarStatus = document.getElementById("carStatus");

            if (selection == 'a') {
                var update = prompt("Enter new car make");
                car.make = update;
            }

            if (selection == 'b') {
                var update = prompt("Enter new car model");
                car.model = update;
            }

            if (selection == 'c') {
                var update = prompt("Enter new car color");
                car.color = update;
            }

            if (selection == 'd') {
                car.driveToWork();
            }

            if (selection == 'e') {
                car.driveAroundWorld();
            }

            if (selection == 'f') {
                car.getTuneUp();
            }

            if (selection == 'g') {
                car.honk();
            }

            textCarMake.textContent   = "The Car's Make:   " + car.make;
            textCarModel.textContent  = "The Car's Model:  " + car.model;
            textCarColor.textContent  = "The Car's Color:  " + car.color;
            textCarMilage.textContent = "The Car's Milage: " + car.mileage;
            textCarStatus.textContent = "The Car's Status: " + car.isWorking;


}

// the maximum is exclusive; the minimum is inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



var dogs = JSON.parse(dogList);

var targetDiv = document.getElementById("test");
targetDiv.textContent = dogs.length;

var randomInt = getRandomInt(1, dogs.length - 1); // -1 is temporary

var targetDiv = document.getElementById("test-word");
targetDiv.textContent = dogs[randomInt].breed;
//targetDiv.textContent = dogs[randomInt].image;

var targetDiv = document.getElementById("test-random");
targetDiv.textContent = randomInt;

var dogString = dogs[randomInt].breed.split("");
var guessString = dogString;
for (var i=0; i < dogString.length; i++) {
	if (dogString[i] != " ") {
		guessString[i] = "_";
	}
}

var targetDiv = document.getElementById("test-array");

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

var indexes = getAllIndexes(Cars, "Nano");



targetDiv.textContent = guessString;

var lettersGuessed;
var guessedWordSoFar;
//string compare with other sting. use index location of word to match other array
// for spaces, ignore somehow.
var numberOfGuessesRemaining;
//array split into string.

console.log(dogs[0].breed);
console.log(dogs[0].image);
console.log(dogs[1].breed);
console.log(dogs[1].image);
console.log(dogs[2].breed);
console.log(dogs[2].image);
console.log(dogs[3].breed);
console.log(dogs[3].image);

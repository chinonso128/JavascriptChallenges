// let randomNumbers = math.floor(math.random() * 50) + 1
// let benchmark = 6
//     for(let i = 0; i < benchmark; i++){
//         randonNumbers = math.floor(math.random() * 50) + 1
//         console.log(randomNumbers)
//     }
//     console.log(randomNumbers)

// let numbers = 9






// let films = ["Stranger Things",
// "SWAT", "24", "Terminator"
// ]
// for (i = 0; i < films; i++)
// if 


let bobsFollowers = [
    "Chinonso",
    "Neil",
    "Rowan",
    "Mishal"
];

let hannahsFollowers = [
    "Chinonso",
    "John",
    "Brian",
    "Mishal"
];

for (i = 0; i < 1;i++){
    console.log("List of Hannahs Followers " + hannahsFollowers.toString())
    console.log("List of Bobs Followers " + bobsFollowers.toString())
}
console.log("checking if any match")
if (bobsFollowers.length !== hannahsFollowers.length) return console.log("false");
let j = 0
for (let i = 0; i < bobsFollowers.length; i++) {
        if (bobsFollowers[i] === hannahsFollowers[j]) {
            console.log("Match Found", bobsFollowers[i]);
        }
        else{
          console.log("Not A Match", bobsFollowers[i]);
        }
    j++;
}
//Prompt user for flavors and store the result

let flavorsString = prompt(
  "Please enter a list of Fro-Yo flavors, separated by commas."
);

//Parse user input into an array of flavors
const flavorsArr = flavorsString.split(",");

// console.log(flavorsArr);

//Build an object to track which flavors you have observed so far

// const froyoTotals = {};

let flavorList = {};

// console.log("flavorList: ", flavorList);


    for (let flavs = 0; flavs < flavorsArr.length; flavs++) {
    const key = flavorsArr[flavs];
    // flavorList[key] = 1;
    if (flavorList[key]) {
        flavorList[key] += 1;
    } else {
    flavorList[key] = 1;

    }

//   flavorList[flavs] = flavorsArr[flavs];
//   return(flavorList);
}
console.log("flavorList after loop: ", flavorList);


// let flavorCount = {};

// const froyoOrder = {
//     for (const key in flavorArr) {
//         console.log(key);
//     }; if (key in flavorArr)
//         value += 1;

//     }


var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
function sumOfComputer(arr){
let count = 0

for(var i = 0; i < officeItems.length; i++){

if (arr[i] === "computer" ){
     count += 1 

}
} 
console.log("The sum of computer is " + count)
}

sumOfComputer(officeItems)




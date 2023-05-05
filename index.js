// make a function called has targetSum that cxhecks if two numbers from array add up to some target
// if array[1, 2, 3, 4] and the target is 6 i should return true  because 2 and 4 add up to 6

// for each number check if there is a number thats add up to the target 


function hasTargetSum(array, target) {
  // create an object track to keep track of the numbers weve already seen

  const seenNumbers = {}
// iterate through each number in the array
  for (let i = 0; i < array.length; i++) {
    const compliment = target - array[i]
    // for current num identify a compliment thats add up to the target (compliment = target - current number)

    if (seenNumbers[compliment] ) return true
    // otherwise add the number to object
seenNumbers[array[i]] = true
  }
//   else if i reach the end without finding compliment
// return false
  return false
}



// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   // iterate through each number in the array

//   for (let i = 0; i < array.length; i++) {
//     // n steps
//     // for current num identify a compliment thats add up to the target (compliment = target - current number)
//     const compliment = target - array[i];
//     // 1 step
//     // iterate through the rest of the array
//     for (let j = i + 1; j < array.length; j++) {
//       //  n steps is equal to n * n steps
       
//       // if compliment is any number in the array return true
//       if (array[j] === compliment) {
//         // 1 step
//         return true
//       }
//     }
 
//   }
// //   else if i reach the end without finding compliment
// // return false

//   return false
// }

/* 
  Write the Big O time complexity of your function here
  Runtime: o(n^2) 
  space complexity: o(n)

  
*/
// hasTargetSum([1, 2, 3, 4]6)
// wwe haven,t seen the number until we start iterating
// keep track of the numbers already iterated through  
// the number we have already looked and the one currently be looked at
// seenNumbers = {
  // the value is less important
//   1: true
    // 2: true
    // 3: true

// }





/* 
  Add your pseudocode here
*/
// hasTargetSum([3, 8, 12, 4, 11, 7], 10)
// create an object track to keep track of the numbers weve already seen

// iterate through each number in the array
/*for current num identify a compliment thats add up to the target (compliment = target - current number)
// check if any key on our object is the compliment

// if so return true
otherwise add the number to object



iterate through the rest of the array
// check
if the compliment is any number in the array then return true
else if i reach the end without finding compliment
return false



  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

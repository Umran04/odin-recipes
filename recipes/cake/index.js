// function sumOfTripledEvens(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       // Step 1: If the element is an even number
//       if (array[i] % 2 === 0) {
//         // Step 2: Multiply this number by three
//         const tripleEvenNumber = array[i] * 3;
  
//         // Step 3: Add the new number to the total
//         sum += tripleEvenNumber;
//       }
//     }
//     return sum;
//   }

  
  let numbers = [1,2,3,4,5,6,7,8,9,10]


  function isEven(arr){
    return arr % 2 ==0;
  }

  function mulByThree(arr){
    return arr * 3
  }

  function sumOfTripledEvens(arr){
    let evenNums = arr.filter(isEven);
    let timesThree = evenNums.map(mulByThree);
    let finalTotal = timesThree.reduce((total,currentItem)=>{
        return total + currentItem
    }, 0)

    console.log(finalTotal);
  }

  sumOfTripledEvens(numbers)
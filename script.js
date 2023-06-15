// Good Luck 💪🏾

//Done 💯💯👍👍

function secondLargest(arr) {
    arr.sort(function(a, b) {
      return b - a;
    });
    return arr[1];
  }
  console.log(secondLargest([44, 55, 66, 77, 88])); // Result --> 77
  console.log(secondLargest([10, 30, 80, 60, 100])); // Result --> 80
  

function filterEvenOdd(arr , isEven) { 
    return arr.filter(isEven);
}

 var isEven = (val) =>  val % 2 === 0;
 var arr = [1,2,3,4,5,6,7,8,9];
 filterEvenOdd(arr , isEven);
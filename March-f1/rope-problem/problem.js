function calculateMinCost(){
    var inputValue = document.querySelector("#rope-lengths").value;
    var inputArr = inputValue.split(",");
    for (let index = 0; index < inputArr.length; index++) {
         inputArr[index] = Number(inputArr[index]);
    }
    var cost = 0;
    inputArr.sort((a, b) => { return a - b});

    while(inputArr.length > 1) {
        var newRope = inputArr[0] + inputArr[1];
        cost += newRope;

        // deleting the first 2 values
        inputArr.splice(0 , 2);
        inputArr.push(newRope);
        inputArr.sort((a , b) => {return a - b});
    }
    document.querySelector("#result").textContent = cost;
}
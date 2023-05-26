function greet(takeOrder) {
    console.log("say hello");
    takeOrder(giveFood)
}

function takeOrder(giveFood) {
    var order = true;
    if(order) {
        console.log("taking order");
        giveFood(takePayment)
    }
    else {
        takePayment(thankyou)
    }
}

function giveFood(takePayment) {
    var payment = "success"
    console.log("giving food");
    if(payment == "success")
    takePayment(thankyou)
}

function takePayment(thankyou) {
    console.log("please pay for your food");
    thankyou()
}

function thankyou() {
    console.log("thank you for coming");
}

greet(takeOrder)

// greet();
// takeOrder();
// giveFood();
// takePayment();
// thankyou();
// Actiity 3


// const cashDraw = (amount, pin, acctNum) => {
//     if ((amount <= 1000) && (pin == 1234)) {
//        console.log(`pay ${acctNum} the sum of ${amount}`)
//     } 
//     else if ((amount > 1000) &&  (pin == 1234)){
//         console.log(`you've not got enough money`)
//     }
//     else {
//         console.log (`pin is incorret`);

//      }
//     }
//     cashDraw(500, 1254, 123456789);
//     cashDraw(1200, 1234, 123456789);
//     cashDraw(1000, 1234, 123456789);

let orderCount = 2;

const takeOrder = (topping1, topping2) => {
    console.log (`i want pizza with ${topping1} and ${topping2}`);
    orderCount++;
}
takeOrder('mozarella', 'peperonni');
takeOrder('marshmallows', 'steak');



// reduce method

const myNums =[ 1, 2, 3, 4]

// const initialValue = 0 ; 
// const newNums = myNums.reduce(
//     (accumulator , currentValue) => accumulator + currentValue,
//     initialValue
// )
// console.log(newNums);

// const myTotal = myNums.reduce( function ( acc, currval) {
//     console.log(`acc: ${acc} and cureval: ${currval}`);
//     return acc + currval 
// },0)
// console.log(myTotal);

const shippingCart = [
    {
        itemName :"JavaScript course",
        price: 2999
    },
    {
        itemName :" Python course",
        price: 999
    },
    {
        itemName :" Mobile Dev course",
        price: 5999
    },
    {
        itemName :" Data Science course",
        price: 12999
    }    
]            // for adding the values inside the arrays and objects , we use the reduce method 

// const priceToPay = shippingCart.reduce((acc , item ) => acc + item.price , 0)
// console.log(priceToPay);


const priceToPay = shippingCart.reduce((acc , item ) => { 
    console.log( `acc: ${acc} and item: ${item.price}`);
    return acc + item.price} , 0)
console.log(priceToPay);


let product_price=500
let quantity=5
let membership_status=false
let code=" "
let bill=(product_price*quantity)

if (bill>2000 && membership_status==true && code){
    discount= bill*10/100
}

let total_bill = bill-discount

console.log("product price is: ",product_price)
console.log("Membership Status: ",membership_status)
console.log("Discount: ",discount)
console.log("Total Bill is: ",total_bill)


//Creating a type alias called PaymentMethod that allows only the following values: "UPI" "CreditCard" "PayPal"
type PaymentMethod = "UPI" | "CreditCard" | "PayPal"
// Create a function named makePayment that: Accepts a parameter of type PaymentMethod.

function makePayment(paymentMethod: PaymentMethod) {
    //it Prints the selected payment method to the console.
    console.log(paymentMethod);
}
//Calling the function using the following arguments: "UPI" "CreditCard"
makePayment("UPI")
makePayment("CreditCard")



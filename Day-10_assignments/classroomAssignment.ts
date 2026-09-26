class Order {
    productName: string
    orderId: string
    price: number
    constructor(productName: string, orderId: string, price: number) {
        // Accept values for all properties  
        // Initialize the class properties using the this keyword
        this.productName = productName;
        this.orderId = orderId;
        this.price = price;
        //  Print a message indicating that the order was created successfully  
        console.log(`Order created successfully for ${this.productName}`);
    }
    //creating method named placeOrder
    public placeOrder() {
        //This method should print a message indicating that the order has been placed successfully. 
        console.log(`Order placed for ${this.productName} with ${this.orderId} `);

    }
    //creating method named cancleOrder
    public cancelOrder() {
        //This method should print a message indicating that the order has been cancelled. 
        console.log(`Order cancelled for ${this.productName} `);

    }
}
//creating object named order1 using the new keyword and pass values through the constructor. 
const order1 = new Order("iPhone 16", "ORD123", 85000)
//calling the methods
order1.placeOrder()
order1.cancelOrder()



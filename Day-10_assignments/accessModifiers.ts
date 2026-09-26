//Step 1: Create LoginTest Class
class LoginTest {
    // Add public property: browserName = Chrome- 
    // Add private property: password = admin123- 
    // Add protected property: userName = tester
    public browserName: string = 'Chrome'
    private password: string = 'admin123'
    protected userName: string = 'tester'
    //Step:2 Create Methods
    // public method openApplication()
    public openApplication() {
        console.log(`this is open application${this.browserName}`);

    }
    // - public method login()
    public login() {
        // - Inside login() access private and protected properties
        console.log(`here private variable accessing ${this.password}`);
        console.log(`here protected variable accessing ${this.userName}`);

    }

}
//Step 3: Create Object Outside Class- Create object for LoginTest
let obj1 = new LoginTest()
//  Call public methods outside the class
obj1.openApplication()
obj1.login()

// - Try accessing private and protected variables outside class and observe errors
console.log(obj1.browserName);//only public variable accessible
//console.log(obj1.password) //error private variable access within the class
//console.log(obj1.userName);//error protected variable access within the class


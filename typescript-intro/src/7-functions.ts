const myfunctions = () => {

    // Function Declaration
    function add(x: number, y: number): number {
        if (y)
        {
            return x + y;
        };
        return x;
    }

    // Function Expression.
    const subtract = function (x: number, y: number): number {
        if (y)
        {
            return x - y;
        };
        return x;
    };

    // Arrow Function.
    const multiply = (x: number, y: number): number => {
        
        if (y)
        {
            return x * y;
        };
        return x;
    }
    

    // Optional Parameters
    const divide = (x: number, y?: number): number => {
        if (y) {
            return x / y;
        }
        return x;
    };
    //functions returning multiple varibles eg  a class or interface.
    type credentials = {
        email: string,
        pin: number
    }
    function Login(email: string, pin: number): credentials {
        return {
            email,
            pin
        }
    }
    const user = Login ("paulmuyalikhams@gmail.com",123);
    console.log("User credentials:", user);

    console.log(add(5, 10));
    console.log(subtract(10, 5));
    console.log(multiply(5, 10));
    console.log(divide(10));
}

export default myfunctions;
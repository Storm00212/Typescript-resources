const myfunctions = () => {
    // Function Declaration
    function add(x, y) {
        if (y) {
            return x + y;
        }
        ;
        return x;
    }
    // Function Expression.
    const subtract = function (x, y) {
        if (y) {
            return x - y;
        }
        ;
        return x;
    };
    // Arrow Function.
    const multiply = (x, y) => {
        if (y) {
            return x * y;
        }
        ;
        return x;
    };
    // Optional Parameters
    const divide = (x, y) => {
        if (y) {
            return x / y;
        }
        return x;
    };
    function Login(email, pin) {
        return {
            email,
            pin
        };
    }
    const user = Login("paulmuyalikhams@gmail.com", 123);
    console.log("User credentials:", user);
    console.log(add(5, 10));
    console.log(subtract(10, 5));
    console.log(multiply(5, 10));
    console.log(divide(10));
};
export default myfunctions;
//# sourceMappingURL=7-functions.js.map
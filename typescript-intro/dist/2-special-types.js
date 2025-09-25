const specialTypes = () => {
    // 1. Never : The never type represents the type of values that never occur.
    // For example, a function that throws an error or one that never returns.
    const throwError = () => {
        throw new Error('This is an error');
    };
    const infiniteLoop = () => {
        while (true) { }
    };
    // 2.Any: Ts has special types that may not refer to any specific type of data
    // Its criminal to use any in your code😐
    let age = 25;
    age = "twenty five"; // age can be a string now
    age = true; // age can be a boolean now
    age = [1, 2, 3]; // age can be an array now
    //3. null & undefined: In Ts, both null and undefined have their own types named null and undefined respectively.
    // By default, null and undefined are subtypes of all other types. This means you can assign null and undefined to any type.
    let u = undefined;
    let n = null;
    //4. void: The void type is used to indicate that a function does not return a value.
    const logMessage = (message) => {
        console.log(message);
    };
    logMessage("Hello, World!");
};
export default specialTypes;
//# sourceMappingURL=2-special-types.js.map
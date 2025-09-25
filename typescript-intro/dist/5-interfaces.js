const myInterface = () => {
    // interface - are used to define the structure of an object
    const employee = {
        name: "Kemboi",
        age: 25,
        employeeId: 12345,
        position: "Software Developer",
        greet: function () {
            console.log(`Hello, my name is ${this.name} and I am a ${this.position}.`);
        },
    };
    console.log("--TypeScript Interfaces--");
    console.log(`Employee Details: ${JSON.stringify(employee)}`);
    // or
    console.log(`Employee Details: ${employee.name} is ${employee.age} years old and their employee ID is ${employee.employeeId}. They are a ${employee.position}.`);
    employee.greet(); // Output: Hello, my name is Kemboi and I am a Software Developer.
    // employee.greet.call(employee); // Output: Hello, my name is Kemboi and I am a Software Developer.
};
export default myInterface;
//# sourceMappingURL=5-interfaces.js.map
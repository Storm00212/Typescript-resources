const unionIntersection = () => {
    // 2. Union Types: You can create a type that can be one of several types using the | operator.
    const value = "Hello"; // can be a string or a number
    console.log(`Value: ${value}`);
    const value2 = 42; // can be a string or a number
    console.log(`Value: ${value2}`);
    const employeeDetails = {
        name: "Kemboi",
        age: 25,
        employeeId: 12345,
        position: "Software Developer"
    };
    console.log("--TypeScript Union and Intersection Types--");
    console.log(`Employee Details: ${JSON.stringify(employeeDetails)}`);
    // or
    console.log(`Employee Details: ${employeeDetails.name} is ${employeeDetails.age} years old and their employee ID is ${employeeDetails.employeeId}. They are a ${employeeDetails.position}.`);
};
export default unionIntersection;
//# sourceMappingURL=6-union-intersection.js.map
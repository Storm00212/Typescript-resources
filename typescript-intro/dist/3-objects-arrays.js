const objectsArraysTuples = () => {
    //1.  Objects: In TypeScript, you can define the type of an object using an interface or a type alias.
    const Person = {
        //defined using object literal
        name: "Kemboi",
        age: 25,
        hobbies: ["reading", "coding"],
        role: ["Trainer", "Software Developer"],
    };
    console.log("--TypeScript Objects--");
    console.log(`Person Details: ${JSON.stringify(Person)}`);
    // or
    console.log(`Person Details: ${Person.name} is ${Person.age} years old and enjoys ${Person.hobbies.join(", ")}. Their roles are ${Person.role.join(", ")}.`);
    // car object with properties and methods
    const car = {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        start: function () {
            console.log("Car started");
        },
        stop: function () {
            console.log("Car stopped");
        },
    };
    // Accessing properties and methods of the car object
    console.log(`Car Details: ${car.make} ${car.model} (${car.year})`);
    car.start(); // Output: Car started
    car.stop(); // Output: Car stopped
    //2.  Arrays: In TypeScript, you can define the type of an array using the Array<T> syntax or the T[] syntax.
    let colors = ["red", "green", "blue", "white"];
    let numbers = [1, 2, 3, 4, 5, 6, 7];
    console.log("--TypeScript Arrays--");
    console.log(`Colors: ${colors.join(",")}`);
    console.log(`Numbers: ${numbers.join(",")}`);
    //Array methods
    //push adds an item to the end of an array.
    colors.push("yellow");
    console.log(`Updated Colors: ${colors.join(",")}`);
    //Acessing one item in an array.
    console.log(`First Color: ${colors[0]}`);
    //Acessing the last color
    console.log(`Last Color: ${colors[colors.length - 1]}`);
    //Accessing size of an array.
    console.log(`Number of Colors: ${colors.length}`);
    // shift() removes the first element from an array and returns that removed element. This method changes the length of the array.
    const firstColor = colors.shift();
    console.log(`First Color Removed: ${firstColor}`);
    console.log(`Updated Colors after shift: ${colors.join(",")}`);
    // unshift() adds one or more elements to the beginning of an array and returns the new length of the array.
    const newLength = colors.unshift("purple");
    console.log(`New Length after unshift: ${newLength}`);
    console.log(`Updated Colors after unshift: ${colors.join(",")}`);
    // pop removes the last element of an array.
    colors.pop();
    console.log(`Updated colors: ${colors.join(",")}`);
    //Aliases.TypeScript allows types to be defined separately from the variables that use them.Aliases and Interfaces allows types to be easily shared between different variables/objects.
    //Union types. Can be used when the parameter can be of two types.
    function printStatusCode(code) {
        console.log(`Status ${code}`);
    }
    printStatusCode(404);
    printStatusCode("404");
    //3.  Tuples: In TypeScript, you can define a tuple using the [type1, type2, ...] syntax.
    let person = ["John", 30]; // Tuple with string and number
    console.log("--TypeScript Tuples--");
    console.log(`Person Tuple: ${person[0]} is ${person[1]} years old`);
    // Accessing tuple elements.
    console.log(`Name: ${person[0]}`);
    console.log(`Age: ${person[1]}`);
};
export default objectsArraysTuples;
//# sourceMappingURL=3-objects-arrays.js.map
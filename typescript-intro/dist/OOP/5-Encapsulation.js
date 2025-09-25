const Encapsulation = () => {
    // Encapsulation is the bundling of data and methods that operate on that data within one unit, such as a class in object-oriented programming.
    //  It restricts direct access to some of an object's components and can prevent the accidental modification of data.
    // Encapsulation is one of the four fundamental OOP concepts.
    // Demo on code
    // Encapsulation in TypeScript
    class Person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getName() {
            return this.name;
        }
        getAge() {
            return this.age;
        }
        setName(name) {
            this.name = name;
        }
        setAge(age) {
            this.age = age;
        }
    }
    const person = new Person("John", 30);
    //console.log(person.age); //Property 'age' is private and only accessible within class 'Person'.
    //console.log(person.name); //Property 'name' is private and only accessible within class 'Person'.
    console.log(person.getName()); // Output: John
    console.log(person.getAge()); // Output: 30
    person.setName("Jane");
    person.setAge(25);
    console.log(person.getName()); // Output: Jane
    console.log(person.getAge()); // Output: 25
};
export default Encapsulation;
//# sourceMappingURL=5-Encapsulation.js.map
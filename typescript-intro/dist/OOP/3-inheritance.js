const Inheritance = () => {
    // Inheritance is a mechanism in OOP that allows one class to inherit the properties and methods of another class.
    // This allows for code reusability and a hierarchical relationship between classes.
    // In TypeScript, inheritance is achieved using the `extends` keyword.
    class Animal {
        name;
        constructor(name) {
            this.name = name;
        }
        makeSound() {
            console.log(`${this.name} makes a sound.`);
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super(name); // Call the constructor of the parent class
        }
        makeSound() {
            console.log(`${this.name} barks.`);
        }
    }
    class Cat extends Animal {
        constructor(name) {
            super(name); // Call the constructor of the parent class
        }
        makeSound() {
            console.log(`${this.name} meows.`);
        }
    }
    // Create instances of the subclasses
    const animal = new Animal("an Animal");
    const dog = new Dog("Buddy");
    const cat = new Cat("Whiskers");
    animal.makeSound(); // Output: an Animal makes a sound
    dog.makeSound(); // Output: Buddy barks.
    cat.makeSound(); // Output: Whiskers meows.
};
export default Inheritance;
//# sourceMappingURL=3-inheritance.js.map
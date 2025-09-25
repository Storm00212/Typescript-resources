const accessModifiers = () => {
    // we will be covering 3 access modifiers
    // 1. public - use this when you want to make a property or method accessible from anywhere
    class Person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
    const John = new Person("John", 30);
    const Jane = new Person("Jane", 25);
    John.greet(); // Output: Hello, my name is John and I am 30 years old.
    Jane.greet(); // Output: Hello, my name is Jane and I am 25 years old.
    // 2. private - use this when you want to make a property or method accessible only within the class
    class Person2 {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
        sayHello() {
            this.greet();
        }
    }
    const John1 = new Person2("John", 30);
    const Jane2 = new Person2("Jane", 25);
    // John1.greet(); // Error: Property 'greet' is private and only accessible within class 'Person2'.
    // Jane2.greet(); // Error: Property 'greet' is private and only accessible within class 'Person2'.
    John1.sayHello(); // Output: Hello, my name is John and I am 30 years old.
    // 3. protected- use this when you want to make a property or method accessible only within the class and its subclasses
    class Person3 {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
    class Student extends Person3 {
        grade;
        constructor(name, age, grade) {
            super(name, age);
            // adding a new property
            this.grade = "A";
        }
        sayHello() {
            this.greet();
        }
    }
    const John2 = new Student("John", 30, "A");
    const Jane3 = new Student("Jane", 25, "B");
    // log the infor
    console.log(John2);
    console.log(Jane3);
    John2.sayHello(); // Output: Hello, my name is John and I am 30 years old.
    // John2.greet(); // Error: Property 'greet' is protected and only accessible within class 'Person3' and its subclasses.
    // Jane3.greet(); // Error: Property 'greet' is protected and only accessible within class 'Person3' and its subclasses.
    // 4. readonly - use this when you want to make a property read only and not assignable
    class Person4 {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const John3 = new Person4("John", 30);
    const Jane4 = new Person4("Jane", 25);
    // John3.name = "John Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
    // Jane4.age = 26; // Error: Cannot assign to 'age' because it is a read-only property.
};
export default accessModifiers;
//# sourceMappingURL=2-access-modifiers.js.map
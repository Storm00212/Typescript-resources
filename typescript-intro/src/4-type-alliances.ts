const typeAlliances = () => {
  /* TypeScript has a concept of "type alliances" which allows you to create
     types that are based on other types. This can be useful for creating
     more complex types that are based on simpler types.
      */

  // 1. Type Aliases: You can create a type alias using the type keyword.
  type Person = {
    name: string;
    age: number;
    hobbies: string[];
  };
  type Employee = Person & {
    //means Employee is a type that has all the properties of Person and also has its own properties.
    employeeId: number;
    position: string;
  };
  //the variable now inherits all the properties of the type.
  const employee: Employee = {
    name: "Kemboi",
    age: 25,
    hobbies: ["reading", "coding"],
    employeeId: 12345,
    position: "Software Developer",
  };
  //properties can also be defined separately then joined together in an alliance.
  type CarYear = number;
  type CarType = string;
  type CarModel = string;

  type Car = {
    year: CarYear;
    make: CarType;
    model: CarModel;
  };
  let myCar: Car = {
    year: 2025,
    make: "Toyota",
    model: "Lexus",
  };

  console.log("--TypeScript Type Alliances--");
  console.log(`Employee Details: ${JSON.stringify(employee)}`);
  console.log(`Employee's Car's details: ${JSON.stringify(myCar)}`);
  // or
  console.log(
    `Employee Details: ${employee.name} is ${
      employee.age
    } years old and enjoys ${employee.hobbies.join(
      ", "
    )}. Their employee ID is ${employee.employeeId} and their position is ${
      employee.position
    }.`
  );
  console.log(
    `Employee's Car's details: The car was made in ${myCar.year}. It is a ${myCar.model} made by ${myCar.make}`
  );
};

export default typeAlliances;

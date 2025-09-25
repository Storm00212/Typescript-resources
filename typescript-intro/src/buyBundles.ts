import * as readline from "readline";

const buyBundles = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Welcome to our service, please enter your name: ", (userName: string) => {
    console.log(`\nWelcome ${userName}!!`);
    console.log("Here are our daily deals:");
    console.log("1. 5MB for 5sh (valid 24hrs)");
    console.log("2. 50MB for 10sh (valid 24hrs)");
    console.log("3. 100MB for 20sh (valid 24hrs)\n");

    rl.question("What choice will you have today? ", (bundleChoice: string) => {
      switch (bundleChoice) {
        case "1":
          console.log("✅ You have received 5MB for 24 hours");
          break;
        case "2":
          console.log("✅ You have received 50MB for 24 hours");
          break;
        case "3":
          console.log("✅ You have received 100MB for 24 hours");
          break;
        default:
          console.log("❌ Invalid Choice. Try again");
          break;
      }
      rl.close();
    });
  });
};

export default buyBundles;

In this resource I have added typescript fundamentals including core concepts, typescript for backend development and typescript for machine learning using tensorflow.


Download the zip file and set up typescript on your computer.
make sure to install nodejs,  pnpm and git.
once you have installed these dependencies open git bash on your computer.

Setting up typescript with tsx.
Go to you file on git bash
cd dowloads/yourfile/typescript-intro (or the place where you stored your extracted file.)
(use this for the typescript-intro folder the restapi folder and the ts-ml-classifier-folder).
(the other files can be run directly on visual studio code without any dependencies).
(for ts-ml classifier make sure to install and set up tensorflow, you can research on its documentation).

Initiallize package.json file pnpm init

step 2

Install tsx and typescript as Dev dependancies

pnpm install -D tsx typescript

The following will be generated in package.json file


<img width="710" height="445" alt="1746032626852" src="https://github.com/user-attachments/assets/47ce9e9a-b26f-4815-aea0-6fcd2f15fd3a" />


you will see this as well in dev dependencies


<img width="422" height="87" alt="1746032767093" src="https://github.com/user-attachments/assets/fda7cefb-1536-4fbb-9d54-4b894646cb04" />


Create tsconsfig.json file- This file configures how your typescript code should be executed

pnpm tsc --init

step 4

Add the following code to the created tsconfig.json file

{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "rootDir": "./src",
    // "moduleResolution": "node10",
    "moduleResolution": "nodenext",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true, 
    /* Type Checking */
    "strict": true,
    "skipLibCheck": true 
  },
  "include": [
    "src/**/*"   
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ],
}

step 5

Create **src **folder at the root of the project and add index.ts file
You can use this typescript code to test.
export const sum = (a: number, b: number): number => {
    return a + b;
}

console.log(sum(2,4))


step 6

Setting up scripts on package.json file
Make sure you have this on your package.json file

"scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "npm run build && node dist/index.js"
  },
step 7

Run your code/ build

to run on development
On your Visual studio code terminal run this.
pnpm run dev

to run on production

npm run build && node dist/index.js

to build the code

pnpm run build

Manage cookies
Do not share my personal information

import inquirer from "inquirer";

let score = 0
let Quiz1 = await inquirer.prompt(
    {
        message: "Typescript is a superset of which programming language?",
        type: "list",
        name: "Q1",
        choices:[
            "JavaScript",
            "Java",
            "Phython",
            "C++",
        ]
    }
)
if (Quiz1.Q1 === "JavaScript"){
    console.log(` \tYour answer is correct and your score is ${++score}\n`);
}else {
    console.log("\tYour answer is incorrect\n");
    
}
let Quiz2 = await inquirer.prompt(
    {
        message: "Which cammand is use to compile Typescript files into Javascript?",
        type: "list",
        name: "Q2",
        choices:[
            "`ts`",
            "`tsc`",
            "`Compile`",
            "`Transpile`",
        ]
    }
)
if (Quiz2.Q2 === "`tsc`"){
    console.log(`\tYour answer is correct and your score is ${++score}\n`);
}else {
    console.log("\tYour answer is incorrect\n");
    
}
let Quiz3 = await inquirer.prompt(
    {
        message: "Typescript support which of the following feature that Javascript does not?",
        type: "list",
        name: "Q3",
        choices:[
            "Interfaces",
            "Classes",
            "Type Annotation",
            "All of above",
        ]
    }
)
if (Quiz3.Q3 === "All of above"){
    console.log(`\tYour answer is correct and your score is ${++score}\n`);
}else {
    console.log("\tYour answer is incorrect\n");
    
}
let Quiz4 = await inquirer.prompt(
    {
        message: "The Typescript compiler (`tsc`) can output Javascript files in which ECMAscript version?",
        type: "list",
        name: "Q4",
        choices:[
           "ES5",
           "ES6",
           "Es7",
           "Es8",
        ]
    }
)
if (Quiz4.Q4 === "ES6"){
    console.log(`\tYour answer is correct and your score is ${++score}\n`);
}else {
    console.log("\tYour answer is incorrect\n");
    
}
let Quiz5 = await inquirer.prompt(
    {
        message: "Typescript helps in catching errors during which phase of software development?",
        type: "list",
        name: "Q5",
        choices:[
           "Design",
           "Implementation",
           "Testing",
           "Development",
        ]
    }
)
if (Quiz5.Q5 === "Implementation"){
    console.log(`\tYour answer is correct and your score is ${++score}\n`);
}else {
    console.log("\tYour answer is incorrect\n");
    
}
let Quiz6 = await inquirer.prompt(
    {
        message: "Which Typescript feature allow developers to describe the shape of an object ?",
        type: "list",
        name: "Q6",
        choices:[
           "Interfaces",
           "Enums",
           "Generics",
           "Decorators",
        ]
    }
)
if (Quiz6.Q6 === "Interfaces"){
    console.log(`\tYour answer is correct and your score is ${++score}\n`);
}else {
    console.log("\tYour answer is incorrect\n");
    
}
let Quiz7 = await inquirer.prompt(
    {
        message: "Typescript provides support for which module system commonly used in Javascript development?",
        type: "list",
        name: "Q7",
        choices:[
          "CommonJS",
          "AMD",
          "ES Modules(ESM)",
          "All of the above",
        ]
    }
)
if (Quiz7.Q7 === "All of the above"){
    console.log(`\tYour answer is correct and your score is ${++score}\n`);
}else {
    console.log("\tYour answer is incorrect \n");
    
}
let Quiz8 = await inquirer.prompt(
    {
        message: "The Readonly keyword in Typescript is used to?",
        type: "list",
        name: "Q8",
        choices:[
          "Make a variable constant after declaration",
          "Define a variable that can only assigned once",
          "Sepecify that property cannot be modified after creation",
          "a and b",
        ]
    }
)
if (Quiz8.Q8 === "Sepecify that property cannot be modified after creation"){
    console.log(`\tYour answer is correct and your score is ${++score}\n`);
}else {
    console.log("\tYour answer is incorrect\n");
    
}
let Quiz9 = await inquirer.prompt(
    {
        message: "Typescript type system primarily helps in?",
        type: "list",
        name: "Q9",
        choices:[
           "Ensuring type safety during development",
           "Optimize runtime performance",
           "Reducing code size",
           "Automating development processes",
        ]
    }
)
if (Quiz9.Q9 === "Ensuring type safety during development"){
    console.log(`\tYour answer is correct and your score is ${++score}\n`);
}else {
    console.log("\tYour answer is incorrect\n");
    
}
let Quiz10 = await inquirer.prompt(
    {
        message: "Which of the following tools can be used for building Typescript code?",
        type: "list",
        name: "Q10",
        choices:[
          "Webpack",
          "Grunt",
          "Parcel",
          "All of the above",
        ]
    }
)
if (Quiz10.Q10 === "All of the above"){
    console.log(`\tYour answer is correct and your score is ${++score}\n`);
}else {
    console.log("\tYour answer is incorrect\n");
    
}
console.log(`==================================`);
console.log("THANK YOU FOR ATTEMPTING THE QUIZ");
console.log(`==================================`);





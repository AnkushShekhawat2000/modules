
//  single export or default export
// console.log("Getting started...");

// let name = "Ankush"

// function sayHi(){
//     console.log("Hiii"+name);
// }

// //    sayHi()

// console.log("End of the program");

// export default sayHi




// mutiple export
// console.log("Getting started...");

// let name = "Ankush"

// export function sayHi(){
//     console.log("Hiii"+name);
// }

// export function sayBye(){
//     console.log("Bye"+name);
// }


// console.log("End of the program");



// better way to import multiple value


console.log("Getting started...");

let name = "Ankush"

function sayHi(){
    console.log("Hiii"+name);
}

function sayBye(){
    console.log("Bye"+name);
    return "Hiiiiiiiiiiii";
}


console.log("End of the program");


// export default sayHi


export {sayHi, sayBye};

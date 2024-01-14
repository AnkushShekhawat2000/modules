// import multiple

import {sayHi, sayBye} from "./c.js";

sayHi();
sayBye();



// we can acess as referenece
// import abc from "./c.js";
// abc;


// we can use alias also
// import {sayBye as P} from "./c.js";
// import {sayBye as Q} from "./c.js";  // this will not execute again because same file already executed 
// P();
// Q();




// Note :--> if same file already run from this fun this will not 
//            run again
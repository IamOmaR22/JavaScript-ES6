// Module -- We can do many work in separate file and we can join them in one place. A module can contain variables and functions.


// Import function as math object. When we use * it will take all the functions from math.js.
import * as math from './math';  // When we use * we need to receive them as an object. That's why i have used as math. math object will take all the functions.

console.log(math);  // It will give output as object. In math object we have add, sub function.

console.log(math.add(10, 20));   // It will give the add output
console.log(math.sub(150, 20));  // It will give the sub output




// Import function using destructuring  -- Suppose we have 10 function in math.js, but we need to import 4/5/8 etc.. Then we need to use destructuring.

import {add, div, mod} from './math'

console.log(mod(10, 3));
console.log(add(11, 9));

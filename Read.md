# Evaluating Dynamic Math Expressions in JavaScript

This snippet shows how you can **dynamically evaluate user-inputted mathematics expressions** with `Function()` in JavaScript. If somebody types `"54+56"` in an `inputfield`; then this expression is immediately evaluated with this script.

---

## Code Sample
```python

/*Longrightarrow
let expression = userInput.value; // exemple: "54+56"

const result = Function('"use strict";return (' + expression + ')')();

console.log(result); // 110
```
# How It Works

## 1. Receive user input
The user text is presented as a string:
//print
let expression = userInput.value; // "54+56"
Describe:
## 2. Define a dynamic function
Callproc is
```js
Function('"use strict";return (' + expression + ')')
```
This generates an anonymous function equivalent to:
//JavaScript
function() {
"use strict";
return 54 + 56;
}
```
This is not yet operational as a function at this time.

## 3.  Call the function now
//
Function('"use strict";return (' + expression + ')')();
```
The () at the end of it calls the function immediately and prints out the result of the mathematical operation.

## 4. Save and retrieve the result
//m
const result = 110;
Operate
# Security Note
Function() is as unsafe as eval() is if you place malicious content as user input.

To make it safer, only allow numbers and math operators:
//$z
if (/^[0-9+\-*/.%() ]+$/.test(expression)) {
const result = Function('"use strict";return (' + expression + ')')();
}} else {×}}
userInput.value = "Invalid input";
}$\\\\
Similarly
# Summary

| Code Section          | Purpose                                                                   |
| --------------------- | ------------------------------------------------------------------------- |
| `"use strict";`       | Exécute la función en mode strict por una ejecución segura y más estricta |
| `return (expression)` | Evaluates and returns expression                                          |
| `Function(.)()`       | It dynamically creates that function and calls it right away              |
| `result`              | Stores the end number after calculation                                   |

 ☑️ This method is also used to compute expressions such as 54+56*2/3 that are defined as user strings.

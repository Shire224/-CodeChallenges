// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
  //could use if/else and switch cases
  //easier to put operations into objects
    if(operation == '+'){
        return value1 + value2
    }else if(operation == '-'){
        return value1 - value2
    }else if(operation == '*'){
        return value1 * value2
    }else if(operation == '/'){
        return value1 / value2
    }
}

//put in +,-,*,/ , then put to numbers, +, floats
//return the value of the two nums depending on the operator

// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }
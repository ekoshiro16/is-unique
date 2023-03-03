/*
PROMPT: Implement an algorithm to determine if a string has all unique characters without using any additional data structures.

Return true if the string has all unique characters, and false if it does not. 
*/

function isUnique(inputStr) {
    // Edge cases
    if (inputStr.length <= 1) {
        return true
    } else if (typeof inputStr != "string") return "Invalid data type"

    for (let i = 0; i < inputStr.length - 1; i++) {
        for (let j = i + 1; j < inputStr.length; j++) {
            if (inputStr[i] == inputStr[j]) {
                return false;
            };
        };
    };

    return true; 
};


// TESTS:
console.log(isUnique("abcd")) // should return true
console.log(isUnique("abcc")) // should return false
console.log(isUnique("abcdefghijklmnoopqrstuvwxyz")) // should return false
console.log(isUnique("abcdefghijklmnopqrstuvwxyz")) // should return true
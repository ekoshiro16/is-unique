// NAIVE SOLUTION
    // In the naive solution, we use a nested for loop to iterate through the input string and compare each character to every other character. If we ever find a duplicate, we end the function by returning false. If not, then our string is filled with unique characters. 

function isUnique(inputStr) {
    // Edge cases
    if (inputStr.length <= 1) {
        return true
    } else if (typeof inputStr != "string") return "Invalid data type"

    // We iterate through the entire string
    for (let i = 0; i < inputStr.length - 1; i++) {
        // And for each character, we iterate against every other character in the string we have not yet seen or compared
        for (let j = i + 1; j < inputStr.length; j++) {
            // Now compare the two current characters
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
console.log(isUnique('zycwlvmap')) // should return true
console.log(isUnique('zpovmqleivnafkvndkzlkv')) // should return false

// BIG O:
    // TIME COMPLEXITY: O(n^2), because of the nested loop usage
    // SPACE COMPLEXITY: O(1) 
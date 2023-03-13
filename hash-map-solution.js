// HASH MAP SOLUTION
    // In the hash map solution, we use a data structure known as a hash map to track whether we have seen a given character or not. 

function isUnique(sampleString) {
    // We create a hash map to track whether we have seen a given character or not. When we come across a new character, we note its presence by recording it in the hash map. 
    let hashMap = {};

    // We first iterate through the sample string: 
    for (let i = 0; i < sampleString.length; i++) {
        // If the current character is not in the hash map... 
        if (!hashMap[`${sampleString[i]}`]) {
            // We record its presence
            hashMap[`${sampleString[i]}`] = 1
        
        // However, if we come across a character that has already been recorded in the hash map...
        } else {
            // We have stumbled across a duplicate, and we can end the function early. 
            return false
        }
    };

    // If we make it through without triggering the else case above, then our string is completely unique. 
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
    // Time Complexity: O(n), due to the loop iterating through the input string
    // Space Complexity: O(n), due to the hash map
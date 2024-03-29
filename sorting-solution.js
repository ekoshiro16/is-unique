// SORTING SOLUTION
    // In the sorting solution, we first sort the string in order to force duplicate characters to be clustered next to each other in groups. Once this situation has been obtained, we can simply compare pairs of adjacent characters to determine the "unique-ness" of our string. 

function isUnique(inputStr) {
    // Edge case checks
    if (inputStr.length <= 1) {
        return true
    } else if (typeof inputStr != "string") return "Invalid data type";

    // One core problem of this prompt is based around the fact that if the string is unsorted, we will have no definitive way of identifying a consistent pattern of locating a duplicate without comparing every character to every other character. In that nested loop solution, we have an O(n^2) time cost. 

    // But we can do better. What *if* the string were sorted? Well, in that case, we know that each string would contain clusters where the duplicate characters would be grouped next to one another. If that were the case, we could then iterate through the string, looking at each character one by one, and simply compare each character to the next consecutive character. If they are the same, we know our string contains duplicate, and we can return false. 

    // So let's start by sorting our string, and only afterwards iterate through the string, looking for "clustered" together duplicates. 
    inputStr = inputStr.split('').sort().join('')
    
    for (let i = 0; i < inputStr.length - 1; i++) {
        // As we iterate through the now sorted string, if we find a character with an adjacent duplicate character, we can return the expected output. 
        if (inputStr[i] == inputStr[i+1]) {
            return false
        }
    }

    // And if we didn't find any duplicates, output true. 
    return true; 
}

// TESTS:
console.log(isUnique("abcd")) // should return true
console.log(isUnique("abcc")) // should return false
console.log(isUnique("abcdefghijklmnoopqrstuvwxyz")) // should return false
console.log(isUnique("abcdefghijklmnopqrstuvwxyz")) // should return true
console.log(isUnique('zycwlvmap')) // should return true
console.log(isUnique('zpovmqleivnafkvndkzlkv')) // should return false

// BIG O:
    // Time Complexity: O(n log n), due to the sorting 
    // Space Complexity: O(n), since we are still modifying the input and "cloning" the string by splitting it. 
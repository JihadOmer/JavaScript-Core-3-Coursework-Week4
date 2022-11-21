let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
    // Arrange
     const words = ["irina", "etza", "daniel"];

    // Act
    const result = removeVowelsFromWords(words);

    
    // Assert
   expect(result).toEqual(["rn", "tz", "dnl"]);

  
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]

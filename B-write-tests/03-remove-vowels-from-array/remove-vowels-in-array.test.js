let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let words = ["Irina", "Etza", "Daniel"];

  // Act
  let result = removeVowelsFromWords(words);


  // Assert

  expect(result).toEqual(["__i_a", "_t_z_", "_a_ie_"]);
  
  // expect(result).toEqual(["rn", "tz", "nl"]);

});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]

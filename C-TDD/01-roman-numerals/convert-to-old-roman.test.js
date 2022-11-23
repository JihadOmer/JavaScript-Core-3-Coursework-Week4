let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let input = 1;
  let expected = "I";

  // Act
  let result = convertToOldRoman(input);

  // Assert

  expect(result).toEqual(expected);
});

// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
var twoFer = function (value) {
    if (value === void 0) { value = "you"; }
    return "One for ".concat(value, ", one for me");
};
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
console.log(twoFer());
console.log(twoFer("Elvis"));
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
// isLeapYear(2012) => true
// isLeapYear(2013) => false
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

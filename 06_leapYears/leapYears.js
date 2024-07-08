const leapYears = function(year) {
     if (isNaN(year) || year < 0) {
        return "Not a valid year";
    } else if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
       return false;
    }
};

console.log(leapYears(700))

// Do not edit below this line
module.exports = leapYears;

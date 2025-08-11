const leapYears = function(year) {
if (year % 400=== 0 ||( year %  100 != 0 &&  year % 4=== 0)) {
   console.log("año bisiesto", year);
    return true;
   
    
} else {
    console.log("no es un año bisiesto", year);
    return false
}
};

// Do not edit below this line
module.exports = leapYears;


function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet', feet);

var mofizInches = 144;
var feet = inchToFeet(mofizInches);
console.log('Mofiz inches in feet', feet);


// mile to km
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('Marathon in km: ', marathon);
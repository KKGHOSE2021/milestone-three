// Problem 1: Kilometer to meter conversion

function kilometerToMeter(kilometer) {

    // 1 kilometer = 1000 meter
    const conversionUnit = 1000;

    if (kilometer <= 0) {
        return ("Please enter a valid kilometer number greater than 0.");
    }
    else {
        var meter = kilometer * conversionUnit;
        return meter;
    }

}

var resultKilometerToMeter = kilometerToMeter(10);
console.log(resultKilometerToMeter);


// Problem 2: Calculating total budget for buying watch, phone and laptop

function budgetCalculator(watch, phone, laptop) {

    // fixed unit price rate for watch, phone and laptop
    const watchUnitPrice = 50;
    const phoneUnitPrice = 100;
    const laptopUnitPrice = 500;

    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Please enter valid number of watch, phone and laptop";
    }
    else {
        var watchTotalCost = watch * watchUnitPrice;
        var phoneTotalCost = phone * phoneUnitPrice;
        var laptopTotalCost = laptop * laptopUnitPrice;

        var totalBudget = watchTotalCost + phoneTotalCost + laptopTotalCost;

        return totalBudget;
    }

}

resultBudgetCalculator = budgetCalculator(10, 5, 2);
console.log(resultBudgetCalculator);


// Problem 3: Calculating rent of hotel costs based on number of days staying. 

function hotelCost(numberOfDays) {

    // fixed rent rate for 1st 10days, next 20 days and more than 20 days.
    const firstTenDaysRate = 100;
    const secondTenDaysRate = 80;
    const morethanTwentyDaysRate = 50;


    if (numberOfDays > 0 && numberOfDays <= 10) {
        var totalRentCost = firstTenDaysRate * numberOfDays;
        return totalRentCost;
    }
    else if (numberOfDays > 10 && numberOfDays <= 20) {
        var firstTenDaysRent = firstTenDaysRate * 10;
        var extraDaysRent = secondTenDaysRate * (numberOfDays - 10);
        var totalRentCost = firstTenDaysRent + extraDaysRent;
        return totalRentCost;
    }
    else if (numberOfDays > 20) {
        var firstTenDaysRent = firstTenDaysRate * 10;
        var secondTenDaysRent = secondTenDaysRate * 10;
        var extraDaysRent = morethanTwentyDaysRate * (numberOfDays - 20);
        var totalRentCost = firstTenDaysRent + secondTenDaysRent + extraDaysRent;
        return totalRentCost;
    }
    else {
        return "Please enter valid number of days you want to stay in hotel";
    }
}

resultHotelCost = hotelCost(21);
console.log(resultHotelCost);


// Problem 4: Finding out the longest name of a friend from friends name list. 

function megaFriend(str) {

    // If empty string, then ask to enter an array with name lists
    if (str == '') {
        return "Please enter some name in an array.";
    }
    else {
        var nameLength = 0;

        for (var i = 0; i < str.length; i++) {

            if (str[i].length > nameLength) {
                nameLength = str[i].length;
                var longestName = str[i];
            }
        }
        return longestName;
    }
}

resultMegaFriend = megaFriend(['Karim', 'Rahim', 'Salah', 'Abdul', 'Khokon', 'Rokhon', 'Sakib Al Hasan']);
console.log(resultMegaFriend);
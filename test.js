// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

//fromDollarToYen
test("One dollar should be 146.26168224299064 yens", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    // If 1 euro is 1.07 dollars, then 1 dollar should be 146.26 yen, then 3.5 dollars should be (3.5 / 1.07) * 156.5.
    const expected = (3.5 / 1.07) * 156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(511.91588785046724); // 1 euro is 1.07 dollars multiply by 156.5 yens, then 3.5 dollars should be = (3.5 / 1.07) * 156.5.
})

//fromYenToPound
test("One yen should be 146.26168224299064 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromYenToPound(3.5);

    // If 1 euro is 1.07 dollars, then 1 yen should be 0.005 pound, then 3.5 dollars should be (3.5 / 1.07) / 156.5 * 0.87.
    const expected = (3.5 / 1.07) * 156.5; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.019456869009584665); //  3.5 yen should be = (3.5 / 1.07) / 156.5 * 0.87.
})
const BigNumber = require('bignumber.js');

function parseJSON(jsonString) {
    try {
        const parsedData = JSON.parse(jsonString);
        return parsedData;
    } catch (error) {
        console.error('Error parsing JSON:', error.message);
        return null;
    }
}

// Example usage:
const jsonString = '{"name": "Me", "age": 21, "salary": "10000896896600600000263002379.12345","PortFolio_Value": "10000812412543600000263002379.54321", "grades": [95, 85, 78], "address": {"city": "No Where", "zip": "10001"}}';
const parsedObject = parseJSON(jsonString);
console.log(parsedObject);

let x = new BigNumber(parsedObject.salary);
console.log("Salary: " + x.toFixed(5));

let y= new BigNumber(parsedObject.PortFolio_Value);
console.log("Portfolio Value: " +y.toFixed(5));

let sum = x.plus(y);
console.log("Sum: " +sum.toFixed(4));


//------------------------------//


//Large integers and decimal numbers with many digits may lose precision when represented as standard JavaScript numbers. This is because the number of significant digits is limited by the 64-bit format, leading to potential rounding errors.

//When provide with a string representation of the number to the BigNumber constructor, it creates a BigNumber object that can accurately represent and perform calculations on numbers with arbitrary precision.



//-------------------------------------------//

//Object: The entire JSON data represents an object since it is enclosed in curly braces {}.

// List: The property "grades" contains an array, which is a type of list in JSON. The value [95, 85, 78] represents a list.

// Map: The JSON data uses key-value pairs, which is a characteristic of maps in JSON. For example, "name": "Me" and "age": 21 are key-value pairs within the JSON object.


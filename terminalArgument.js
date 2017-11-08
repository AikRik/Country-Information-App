// Part 1
// Create a Node.js application that does the following:
// - Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
// - Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.jsonPreview the documentView in a new window
// - Outputs information about that specific country. Must be in the following format:
// Country: <country name>
// Top Level Domain: <tld>

const fs = require("fs");
let theCountry = process.argv[2]

fs.readFile("countries.json", "utf-8", function(err, data) {


    var country = JSON.parse(data)

    for (var i = 0; i < country.length; i++) {
        if (err) {
            throw err;
        }

        if (theCountry === country[i].name)
            console.log(`this is the country ${country[i].name} 
Top level Domain: ${country[i].topLevelDomain}`)

    }
})

// Part 2
// - For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// - This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
// - One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// - Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

// - The output of the application should have the following format: 

// Country: <country name>
// // Top Level Domain: <tld>

const Br = require("./json-file-reader");
var brody = process.argv[2]
var kreeft = function(list) {
    for (var i = 0; i < list.length; i++) {
        if (brody === list[i].name) {
            console.log(`name: ${list[i].name}  
top level domain: ${list[i].topLevelDomain}`)
        }
    }
}

Br.var("countries.json", kreeft)
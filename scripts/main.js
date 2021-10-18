function saveData() {
    // capture the user input data
    var userInput = document.getElementById("userTextInput").value;
    alert('Data entered: ' + userInput);

    // Save the data
    var fs = require('fs');  // allows this script to work with the computer's file system.
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });;
}

module.exports = saveData;

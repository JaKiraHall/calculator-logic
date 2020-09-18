/**
 * Node.js program for a logical calculator.
 *
 * When called with "/", it returns the index.html static page.
 * When called with "/calculate/op/:op/num1/:num1/num2/:num2", it returns
 * the answer of the logical calculation
 */

// Set up some global constants for the program
const express = require('express');
const app = express();
const port = 80;

/**
 * The index function redirects the user to request "index.html"
 */
function index(req, res) {
    res.redirect('/index.html');
}

/**
 * Calculate the logical answer and send it back to the user
 */
function calculate(req, res) {
    console.log(req.params);
    let answer = "";
    let op = req.params.op;
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    
    if (op == "NOT") {
        for (i = 0; i < num1.length; i++) {
            if (num1.charAt(i) == '0') {
                answer += '1';
            } else if (num1.charAt(i) == '1') {
                answer += '0';
            }
        }
        //res.send(answer);
    }
    if (op == "OR") {
       for (i = 0; i < num1.length; i++) {
               if (num1.charAt(i) == '1' || num2.charAt(i) == '1') {
                answer += '1';
            } else {
                answer += '0';
            }
           
       }
       //res.send(answer);
    }
    if (op == "AND") {
        for (i = 0; i < num1.length; i++) {
               if (num1.charAt(i) == '1' && num2.charAt(i) == '1') {
                   answer += '1';
                } else {
                   answer += '0';
               }
            
        }
        //res.send(answer);
    }
    
    
    

    // Send the answer back to the user
    res.send(answer);
}

// Set up the handlers for Node.js
// -------------------------------

// static files live in "static" folder
app.use(express.static("static"));

// Calling "/" invokes the index function
app.get('/', index);

// Calling "/calculate/..." invokes the calculate function
app.get('/calculate/op/:op/num1/:num1/num2/:num2', calculate);

// Start Express listening at the given port
app.listen(port, function() {
    console.log("App running at port=" + port);
});
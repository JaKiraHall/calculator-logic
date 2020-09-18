/**
 * Add a hello world right at the top to make sure the Javascript is loaded
 */
console.log("Hello world");

/**
 * Success is called when the answer is returned from the server. This
 * updates the answer text to the answer returned by the server
 */
function success(data) {
    console.log("success=" + data);
    $("#answer").text("Answer= " + data);

}

/**
 * Given the op and the numbers, send the operands to the server and
 * set up the success function to receive the answer once the server has
 * calculated it.
 */

function send(op, num1, num2) {
    let url = "/calculate/op/" + op + "/num1/" + num1 + "/num2/" + num2;
    console.log(url);
    $.get(url, success);
}

/**
 * Handle the user clicking on the Not button
 */
function doNot() {
    // send a NOT command tot he server with the first number
    let num1 = $("#num1").val();
    //send("NOT", num1);
    for (i = 0; i < num1.length; i++) {
        if (num1.charAt(i) == '0' || num1.charAt(i) == '1') {
            continue;
        } else {
            alert("Error. Input should only be 0 and/or 1. No calculation will be done."); 
        }
    }
    
    if (num1.length === 0) {
        return;
    }
    send("NOT", num1, num2);
    
    
}


/**
 * Handle the user clicking the OR button
 */
function doOr() {
    let num1 = $("#num1").val();
    let num2 = $("#num2").val();
    //send("OR", num1, num2);
    for (i = 0; i < num1.length; i++) {
        if (num1.charAt(i) == '0' || num1.charAt(i) == '1') {
            continue;
        } else {
           alert("Error. Input should only be 0 and/or 1. No calculation will be done."); 
        }
        
    }
    for (i = 0; i < num2.length; i++) {
        if (num2.charAt(i) == '0' || num2.charAt(i) == '1') {
            continue;
        } else {
            alert("Error. Input should only be 0 and/or 1. No calculation will be done.");
        }
        
    }
    if (num1.length !== num2.length) {
        alert("Lengths do not match. Please adjust.")
    }
    
    if (num1.length === 0) {
        return;
    }
    
    if (num2.length === 0) {
        return;
    }
    send("OR", num1, num2);
    // check number contains only 0 & 1
    // make sure input is same length 
}

/**
 * Handle the user clicking the AND button
 */
function doAnd() {
    let num1 = $("#num1").val();
    let num2 = $("#num2").val();
    //send("AND", num1, num2);
    for (i = 0; i < num1.length; i++) {
        if (num1.charAt(i) == '0' || num1.charAt(i) == '1') {
            continue;
        } else {
            alert("Error. Input should only be 0 and/or 1. No calculation will be done."); 
        }
        
        
    }
    for (i = 0; i < num2.length; i++) {
        if (num2.charAt(i) !== '0' || num2.charAt(i) !== '1') {
            continue;
        } else {
            alert("ERROR. Input should only be 0 and/or 1. No calculation will be done.");
        }
        
    }
    if (num1.length !== num2.length) {
        alert("Lengths do not match. Please adjust.")
    }
    
    if (num1.length === 0) {
        return;
    }
    
    if (num2.length === 0) {
        return;
    }
    send("AND", num1, num2);
}
/**
 * This function is called on document ready to set up the handlers
 * that are called when each button is clicked
 */
function setup() {
    $("#not").click(doNot);
    $("#or").click(doOr);
    $("#and").click(doAnd);
}

/**
 * When the document has fully loaded and is ready, call the setup function
 */
$(document).ready(setup);
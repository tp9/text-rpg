// This represents the main page. It acts as the
// 'man in the middle' for the engine and the hard coded
// things, e.g the areas and what monsters it will have

function display() {

    // Prints a string to the screen with format:
    // > string
    this.print = function (string) {
        // Print the variable 'string' to the screen
        var newOutput = "&gt; " + string;
        $("#output").append(newOutput);
    }


    // Prints a string to the screen with format:
    // > string <br>
    this.printLine = function (string) {
        var newOutput = "&gt; " + string + "<br>";
        $("#output").append(newOutput);
    }



    // Gets the user input and asks for a CALLBACK when the input
    // is ready to manipulate. Example of use in main.js
    this.validateInput = function(NaN, callback) {

        // Wait for the user to click submit or press
        // enter, then if the input is a valid number
        // return true. If it is not valid return false
        $(document).keydown(function(e) {

            // If the enter key is pressed, if the box is focused and if
            if (e.which == 13 && $("#inputBox").is(":focus")) {

                // Print the user's input regardless of whether it is a
                // number or not.
                var newOutput = $("#inputBox").val()
                $("#output").append(newOutput + "<br>");
                // If the user wants the input to be a number then
                // the program checks if the input is not numerical.
                if (NaN && !isNaN($("#inputBox").val())) {

                    // Get input from screen
                    var newInput = $("#inputBox").val();

                    // Remove this handler
                    this.removeKeyhandler();

                    // Call the code passed to the function
                    callback(newInput);

                    // Return from the function.
                    return;

                // This checks if the user wants non-number input
                // and runs the following code IF the input is not numerical
                } else if (!NaN && isNaN($("#inputBox").val())) {

                    // Get input from screen
                    var newInput = $("#inputBox").val();

                    // Remove this handler
                    this.removeKeyhandler();

                    // Call the code passed to the function
                    callback(newInput);

                    // Return from the function
                    return;
                }
            }
        });


    }

    // Empties the output box.
    this.empty = function() {

        // Sends a popup to the user asking if they still want to clear it
        var yn = confirm("Are you sure that you want to clear the screen?");
        if (yn) {
            // Clears output, input and focuses on input box.
            $("#inputBox").empty();
            $("#output").empty();
            $("#inputBox").focus();
        }
    }

    this.removeKeyhandler = function() {
        $(document).off("keydown", document);
    }
}

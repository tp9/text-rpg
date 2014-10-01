// This represents the main page. It acts as the
// 'man in the middle' for the engine and the hard coded
// things, e.g the areas and what monsters it will have

function display() {

    this.callbackWaiting = false;


    this.print = function (string) {
        // Print the variable 'string' to the screen
        var newOutput = "&gt; " + string;
        $("#output").append(newOutput);
    }

    this.printLine = function (string) {
        var newOutput = "&gt; " + string + "<br>";
        $("#output").append(newOutput);
    }


    this.validateInput = function(NaN, callback) {

        // Wait for the user to click submit or press
        // enter, then if the input is a valid number
        // return true. If it is not valid return false
        $(document).keydown(function(e) {
            this.callbackWaiting = true;
            // If the enter key is pressed, if the box is focused and if
            if (e.which == 13 && $("#inputBox").is(":focus")) {

                // Print the user's input regardless of whether it is a
                // number or not.
                var newOutput = $("#inputBox").val()
                $("#output").append(newOutput + "<br>");
                // If the user wants the input to be a number
                if (NaN && !isNaN($("#inputBox").val())) {
                    // Debug
                    console.log("Enter pressed.");

                    // Get input from screen
                    var newInput = $("#inputBox").val();

                    // Remove this handler
                    $(document).off("keydown", document);

                    // Call the code passed to the function
                    callback(newInput);
                    this.callbackWaiting = false;
                    return;
                } else if (!NaN && isNaN($("#inputBox").val())) {
                    // Debug
                    console.log("Enter pressed.");

                    // Get input from screen
                    var newInput = $("#inputBox").val();

                    // Remove this handler
                    $(document).off("keydown", document);

                    // Call the code passed to the function
                    callback(newInput);
                    this.callbackWaiting = false;
                    return;
                }
            }
        });


    }


    this.handleCallbacks = function(callback) {
        console.log(this.callbackWaiting);
        if (!this.callbackWaiting && typeof callback == "function") {

            callback();
            // Run the code


            return;
        } else if (this.callbackWaiting && typeof callback == "function") {

            setInterval(this.handleCallbacks(callback), 100);

        } else {
            console.error("Not a function");
            return;
        }
    }

    this.empty = function() {
        console.log("Inside empty");
        this.handleCallbacks(function() {
            var yn = confirm("Are you sure that you want to clear the screen?");
            if (yn) {
                console.log("Clearing box");
                $("#inputBox").empty();
                $("#output").empty();
                $("#inputBox").focus();
            }
        });
    }
}

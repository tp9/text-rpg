// This object displays the choices on screen and
// waits for the user to press the corresponding number.
function dialogue(text, options, number, display) {


    // Set the params to variables incase we need to
    // acess them later on.
    this.options = options;
    this.text = text;
    this.display = display;
    this.input = "";
    this.number = number;
    // More variables go here

    // Actually displays the dialogue on screen
    this.activate = function(callback) {

        // Print the users input to the screen
        display.print(this.text + "<br>");

        // Loop through the options and print them out with format:
        // 1. Option 1
        // 2. Option 2
        // etc
        for (var i = 0; i < this.options.length; ++i) {
            this.display.print((i + 1) + ": " + this.options[i] + "<br>");
        }

        // Validate the input, change the input to a string and send it
        // down the callback.
        this.display.validateInput(this.number, function(input) {
            this.input = input.toString();
            callback(input);
        });
    }
}

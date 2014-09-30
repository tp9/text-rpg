// This object displays the choices on screen and
// waits for the user to press the corresponding number.
function dialogue(text, options, display) {


    // Set the params to variables incase we need to
    // acess them later on.
    this.options = options;
    this.text = text;


    // More variables go here

    // Actually displays the dialogue on screen
    this.activate = function() {
        display.print(this.text + "\n");

        for (var i = 0; i < this.options.size(); ++i) {
            display.print((i + 1) + ": " + this.options[i]);
        }
        var userInput = false;
        while (true) {
            userInput = display.validateInput();
            if (userInput) {
                return userInput;
            }
        }
    }
}

// This object displays the choices on screen and
// waits for the user to press the corresponding number.
function dialogue(text, options, display) {


    // Set the params to variables incase we need to
    // acess them later on.
    this.options = options;
    this.text = text;
    this.display = display;
    this.input = "";
    // More variables go here

    // Actually displays the dialogue on screen
    this.activate = function() {
        display.print(this.text + "<br>");
        for (var i = 0; i < this.options.length; ++i) {
            this.display.print((i + 1) + ": " + this.options[i] + "<br>");
        }
        this.display.validateInput(true, function(input) {
            this.input = input.toString();
            if (this.input == 1) {
                display.print("Swegerino");
            }
        });
    }
}

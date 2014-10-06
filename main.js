// This is the main script. It won't ever contain a whole
// lot of code, most of it is in the /assets/js/ folder.
// This is where everything is assembled and most
// importantly where the display object is linked to
// the page.

$(document).ready(function() {

    // Instantiate a new display object
    Display = new display();

    // Instantiate a new dialogue object
    defaultDialogue = new dialogue("What would you like to do?", ["W: Go west", "E: Go east"], true, Display);

    // Callback to use for the dialogue.
    var callback = function(input) {
        
        // Manipulation of the input goes here:
        switch (parseInt(input)) {
            case 1:
                Display.print("You chose 1");
                break;
            case 2:
                Display.print("You chose 2");
                break;
            default:
                // IF the input was none of the above, re-activate the dialogue.
                // The dialogue will call itself many times until the input is valid.
                console.log("Invalid input");
                defaultDialogue.activate(callback);
                break;
        }
    }
    
    // Activate the dialogue for the first time
    defaultDialogue.activate(callback);

});

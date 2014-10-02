// This is the main script. It won't ever contain a whole
// lot of code, most of it is in the /assets/js/ folder.
// This is where everything is assembled and most
// importantly where the display object is linked to
// the page.

// Currently I am still working on setting things up here,
// PLEASE DO NOT MAKE A PULL REQUEST YET.
$(document).ready(function() {

    // Instantiate a new display object
    Display = new display();

    // Instantiate a new dialogue object
    defaultDialogue = new dialogue("Choose an option", ["Sweg", "No Sweg"], Display);
    defaultDialogue.activate();
});

function setreminder(name, call) {
        console.log("Hello " + name);
        call();
    
}

function done() {
    console.log("welcome");
}

setreminder("thank you", done);
function setreminder(name, call) {
    setTimeout(() => {
        console.log("Hello " + name);
        call();
    }, 2000);
}

function done() {
    console.log("welcome");
}

setreminder("thank you", done);
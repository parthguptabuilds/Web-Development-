function setreminder(name, call) {
    setInterval(() => {
        console.log("Hello " + name);
        call();
    }, 2000);
}

function done() {
    console.log("welcome");
}

setreminder("thank you", done);
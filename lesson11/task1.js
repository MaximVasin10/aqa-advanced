function message(text, ms) {
    function consoleMsg() {
        console.log(text);
    }

    setTimeout(consoleMsg, ms);
}

message("Hello", 1000);
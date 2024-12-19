(function (window) {
    const helloSpeaker = {};
    const speakWord = "Hello";

    helloSpeaker.speak = function (name) {
        console.log(`${speakWord} ${name}`);
    };

    window.helloSpeaker = helloSpeaker;
})(window);


(function (window) {
    const byeSpeaker = {};
    const speakWord = "Goodbye";

    byeSpeaker.speak = function (name) {
        console.log(`${speakWord} ${name}`);
    };

    window.byeSpeaker = byeSpeaker;
})(window);


(function () {
    const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (const name of names) {
        const firstLetter = name.charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }

    console.log("\nДодатковий функціонал: Імена з довжиною більше 4 символів");
    for (const name of names) {
        if (name.length > 4) {
            console.log(name);
        }
    }
})();

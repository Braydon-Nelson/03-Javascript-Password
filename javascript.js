var password = document.querySelector(".password");
var generatePass = document.querySelector(".generate");
var copy = document.querySelector(".copy");
var clear = document.querySelector(".clear");
var checkLength = document.querySelector("#checkLength");
var checkLower = document.querySelector("#checkLower");
var checkUpper = document.querySelector("#checkUpper");
var checkNum = document.querySelector("#checkNum");
var checkSpec = document.querySelector("#checkSpec");

var checklist = [
    document.querySelector(".length"),
    document.querySelector(".lowercase"),
    document.querySelector(".uppercase"),
    document.querySelector(".number"),
    document.querySelector(".special")
];

var pattern = {
    charLength: function () {
        if (password.value.length >= 8) {
            checklist[0].setAttribute("style", "color: green;");
            checkLength.setAttribute("style", "display: inline;")
        } else {
            checklist[0].setAttribute("style", "color: red;");
            checkLength.setAttribute("style", "display: none;")
        }
    },
    lowercase: function () {
        var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

        if (regex.test(password.value)) {
            checklist[1].setAttribute("style", "color: green;");
            checkLower.setAttribute("style", "display: inline;")
        } else {
            checklist[1].setAttribute("style", "color: red;");
            checkLower.setAttribute("style", "display: none;")

        }
    },
    uppercase: function () {
        var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

        if (regex.test(password.value)) {
            checklist[2].setAttribute("style", "color: green;");
            checkUpper.setAttribute("style", "display: inline;")
        } else {
            checklist[2].setAttribute("style", "color: red;");
            checkUpper.setAttribute("style", "display: none;")

        }
    },
    number: function () {
        var regex = /^(?=.*[0-9]).+$/; // number pattern

        if (regex.test(password.value)) {
            checklist[3].setAttribute("style", "color: green;");
            checkNum.setAttribute("style", "display: inline;")
        } else {
            checklist[3].setAttribute("style", "color: red;");
            checkNum.setAttribute("style", "display: none;")

        }
    },
    special: function () {
        var regex = /^(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).+$/; // Special character pattern

        if (regex.test(password.value)) {
            checklist[4].setAttribute("style", "color: green;");
            checkSpec.setAttribute("style", "display: inline;")
        } else {
            checklist[4].setAttribute("style", "color: red;");
            checkSpec.setAttribute("style", "display: none;")

        }
    }
};

// Listen for keyup action on password field
password.addEventListener('keyup', function () {

    // Check that password is a minimum of 8 characters
    pattern.charLength();

    // Check that password contains a lowercase letter		
    pattern.lowercase();

    // Check that password contains an uppercase letter
    pattern.uppercase();

    // Check that password contains a number
    pattern.number();

    // Check that password contains a special character
    pattern.special();

});

generatePass.addEventListener("click", function () {
    var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var chars = "abcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOP1234567890";
    do {
        var temp = "";
        var length = Math.random() * (15 - 8) + 8;
        for (var x = 0; x < length; x++) {
            var i = Math.floor(Math.random() * chars.length);
            temp += chars.charAt(i);
        }
        console.log(temp);
    } while (!temp.match(regex))

    password.value = temp;
    pattern.charLength();
    pattern.lowercase();
    pattern.uppercase();
    pattern.number();
    pattern.special();
});

clear.addEventListener("click", function () {
    password.value = "";
    pattern.charLength();
    pattern.lowercase();
    pattern.uppercase();
    pattern.number();
    pattern.special();
});

copy.addEventListener("click", function () {
    password.select();
    var clip = document.execCommand('copy');

});
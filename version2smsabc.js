console.log("loading js.")

var totalrolls = 0;

function randomNum(num1, num2) {
    var numList = [num1];
    for (var i = num1; i < num2; i++) {
        numList.push(i);
    }
    return Math.floor(Math.random() * numList.length + 1)
}

function code() {
    console.log("JS LOADED!")
    var footer = document.getElementById("codeprojects_pagefooter")
    if (footer) {
        footer.parentNode.removeChild(footer);
    }
    document.getElementById("gen").addEventListener("click", function () {
        console.log("clciked gen,")
        async function hello() {
            try {
                console.log("fetch random, should work.")
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNum(1, 1025))
                const json = await response.json()
                console.log(json);
                totalrolls += 1;
                document.getElementById("pokeImage").src = json.sprites.front_default;
                var name = json.name.substring(0, 1).toUpperCase() + json.name.substring(1, json.name.length);
                document.getElementById("name").innerHTML = name;
                document.getElementById("Rolls").innerHTML = "Rolls: "+totalrolls.toLocaleString()
                var sound = new Audio(json.cries.latest);
                sound.play();
            } catch (e) {
                console.log(e);
            }
        }
        hello()
    })
}
if (document.readyState !== 'loading') {
    code()
} else {
    document.addEventListener("DOMContentLoaded", function () {
        code()
    });
}
document.addEventListener("DOMContentLoaded", function () {

});

console.log("loading js.")
var footer = document.getElementById("codeprojects_pagefooter")
if (footer) {
    footer.parentNode.removeChild(footer);
}

var hyphenList = [
    "Ho-Oh",
    "Porygon-Z",
    "Jangmo-o",
    "Hakamo-o",
    "Kommo-o",
    "Tapu-Koko",
    "Tapu-Lele",
    "Tapu-Bulu",
    "Tapu-Fini",
    "Type-Null", // shld be Type: Null
    "Urshifu-Single-Strike", // Urshifu Single-Strike Style
    "Urshifu-Rapid-Strike", // Urshifu Rapid-Strike Style
    "Iron-Treads",
    "Iron-Bundle",
    "Iron-Hands",
    "Iron-Jugulis",
    "Iron-Moth",
    "Iron-Thorns",
    "Iron-Valiant",
    "Walking-Wake",
    "Iron-Leaves",
    "Wo-Chien",
    "Chien-Pao",
    "Ting-Lu",
    "Chi-Yu",
    "Great-Tusk",
    "Scream-Tail",
    "Brute-Bonnet",
    "Flutter-Mane",
    "Slither-Wing",
    "Sandy-Shocks",
    "Roaring-Moon"
]

var oghyphenList = [
    "Ho-Oh",
    "Porygon-Z",
    "Jangmo-o",
    "Hakamo-o",
    "Kommo-o",
    "Tapu Koko",
    "Tapu Lele",
    "Tapu Bulu",
    "Tapu Fini",
    "Type: Null",
    "Urshifu Single-Strike Style",
    "Urshifu Rapid-Strike Style",
    "Iron Treads",
    "Iron Bundle",
    "Iron Hands",
    "Iron Jugulis",
    "Iron Moth",
    "Iron Thorns",
    "Iron Valiant",
    "Walking Wake",
    "Iron Leaves",
    "Wo-Chien",
    "Chien-Pao",
    "Ting-Lu",
    "Chi-Yu",
    "Great Tusk",
    "Scream Tail",
    "Brute Bonnet",
    "Flutter Mane",
    "Slither Wing",
    "Sandy Shocks",
    "Roaring Moon"
  ]

var cd = false;
var totalrolls = localStorage.getItem("totalRolls") || 0;
var totalshinys = localStorage.getItem("totalShinys") || 0;

function randomNum(num1, num2) {
    var numList = [num1];
    for (var i = num1; i < num2; i++) {
        numList.push(i);
    }
    return Math.floor(Math.random() * numList.length + 1)
}

function code() {
    console.log("JS LOADED!")
    if (localStorage.getItem("totalRolls")) {
        document.getElementById("Rolls").innerHTML = "Rolls: "+Number(localStorage.getItem("totalRolls")).toLocaleString()
    }
    if (localStorage.getItem("totalShinys")) {
       document.getElementById("Shinys").innerHTML = "Shinys: "+Number(localStorage.getItem("totalShinys")).toLocaleString()
    }
    var footer = document.getElementById("codeprojects_pagefooter")
    if (footer) {
        footer.parentNode.removeChild(footer);
    }
    if (localStorage.getItem("currentRoll")) {
         var stored = JSON.parse(localStorage.getItem("currentRoll"))
         if (stored.isShiny) {
            document.getElementById("name").style.color = "orange";
            document.getElementById("pokeImage").src = stored.info.sprites.front_shiny;
         } else {
            document.getElementById("name").style.color = "black";
            document.getElementById("pokeImage").src = stored.info.sprites.front_default;
         }
         document.getElementById("name").innerHTML = stored.name
    }
    document.getElementById("gen").addEventListener("click", function () {
        console.log("clciked gen,")
        if (cd) {
            return;
        }
        cd = true
        async function hello() {
            try {
                console.log("fetch random, should work.")
                var shinyChance = randomNum(1,10)
                var num = randomNum(1, 1025)
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + num)
                const json = await response.json()
                console.log(json);
                localStorage.setItem("totalRolls",(localStorage.getItem("totalRolls") && Number(localStorage.getItem("totalRolls")) || 0) + 1)
                setTimeout(function(){
                    cd = false
                },3000)
                if (shinyChance == 1) {
                     localStorage.setItem("totalShinys",(localStorage.getItem("totalShinys") && Number(localStorage.getItem("totalShinys")) || 0) + 1)
                    document.getElementById("pokeImage").src = json.sprites.front_shiny;
                    document.getElementById("name").style.color = "orange";
                    document.getElementById("Shinys").innerHTML = "Shinys: "+Number(localStorage.getItem("totalShinys")).toLocaleString()
                } else {
                    document.getElementById("name").style.color = "black";
                    document.getElementById("pokeImage").src = json.sprites.front_default;
                }
                var name = json.name.substring(0, 1).toUpperCase() + json.name.substring(1, json.name.length);
                var bypassHypenAfterDelete = false
                if (name.includes("-")) {
                    for (var i = 0; i < hyphenList.length; i++) {
                        if (hyphenList[i].toLowerCase() == name.toLowerCase()) {
                            name = oghyphenList[i]
                            console.log(hyphenList[i])
                            bypassHypenAfterDelete = true;
                            break
                        }
                    }
                    if (!bypassHypenAfterDelete) {
                        var hypInd = name.indexOf("-");
                        name = name.substring(0,hypInd);
                    }
                }
                //name = name.replace("-"," ")
                document.getElementById("name").innerHTML = name;
                document.getElementById("Rolls").innerHTML = "Rolls: "+Number(localStorage.getItem("totalRolls")).toLocaleString()
                var sound = new Audio(json.cries.latest);
                sound.play();
                var jsonList = JSON.parse("{}");
                jsonList.entry = num;
                jsonList.info =json;
                jsonList.name = name;
                jsonList.isShiny = shinyChance == 1;
                localStorage.setItem("currentRoll",JSON.stringify(jsonList))
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

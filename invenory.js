function code() {
  var footer = document.getElementById("codeprojects_pagefooter")
  if (footer) {
    footer.parentNode.removeChild(footer);
  }
  var inventory = localStorage.getItem("realinventory")
  if (inventory) {
    var parsedInv = JSON.parse(inventory);
    var pokeStr = "";
    for (var i = 0; i < parsedInv.length; i++) {
      pokeStr += parsedInv[i].name + ": Quantity: " + parsedInv[i].quantity.toLocaleString() + ": OwnsShiny: " + (parsedInv[i].displayShiny && "YES" || "NO") + "\n"
    }
    document.getElementById("pokText").innerHTML = pokeStr;
  }
}


if (document.readyState !== "loading") {
  code()
} else {
  document.addEventListener("DOMContentLoaded",function(){
    code()
  })
}
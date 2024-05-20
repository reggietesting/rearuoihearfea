function code() {
  var footer = document.getElementById("codeprojects_pagefooter")
  if (footer) {
    footer.parentNode.removeChild(footer);
  }
  var inventory = localStorage.getItem("inventory")
  if (inventory) {
    var parsedInv = JSON.parse(inventory);
    var pokeStr = "";
    for (var obj in parsedInv) {
        pokeStr += obj + ": Quantity: " + Number(parsedInv[obj].quantity).toLocaleString() + ": OwnsShiny: " + (parsedInv[obj].displayShiny && "YES" || "NO") + "\n"
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

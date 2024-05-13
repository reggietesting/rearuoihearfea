function randomNum(num1, num2) {
    var numList = [num1];
    for (var i = num1; i < num2; i++) {
      numList.push(i);
    }
    return Math.floor(Math.random() * numList.length + 1)
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("gen").addEventListener("click", function () {
      async function hello() {
        try {
          const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNum(1,1025))
          const json = await response.json()
          console.log(json);
          document.getElementById("pokeImage").src = json.sprites.front_default;
          var name = json.name.substring(0,1).toUpperCase() + json.name.substring(1,json.name.length);
           document.getElementById("name").innerHTML = json.name;
           var sound = new Audio(json.cries.latest);
           sound.play();
        } catch (e) {
          console.log(e);
        }
      }
      hello()
    })
  });
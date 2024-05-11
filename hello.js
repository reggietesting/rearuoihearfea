async function getDef(word){
  const fet = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word);
  const resp = await fet.json();
  console.log(resp);
  
  if (resp && resp[0]) {
     console.log(resp[0].meanings[0].definitions[0].definition);
     document.getElementById("name").innerHTML = word
  } else if (resp && resp.title) {
   document.getElementById("name").innerHTML = resp.title;
  } else {
    document.getElementById("name").innerHTML = "err"
  }
}

getDef(document.getElementById("def").textContent);

const abc = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
const dec = JSON.parse(abc);

console.log(dec)
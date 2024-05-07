const urlstr = window.location.search
const queryparse = new URLSearchParams(urlstr)

if (queryparse.get("customurl")) {
    fetch("https://"+queryparse.get("customurl"))
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
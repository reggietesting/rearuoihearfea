console.log("loading js.");

var footer = document.getElementById("codeprojects_pagefooter")

if (footer) {
    footer.parentNode.removeChild(footer);
}

function code() {
  console.log('ran code');
  document.getElementById('menchukov').addEventListener('click', function() {
    window.location.href = "https://www.merriam-webster.com/slang/rickroll";
  });
}


if (document.readyState !== 'loading') {
    code();
} else {
    document.addEventListener("DOMContentLoaded", function () {
        code();
    });
}

console.log("loading js.")
var footer = document.getElementById("codeprojects_pagefooter")

if (footer) {
    footer.parentNode.removeChild(footer);
}

function code() {
  window.location.href = "https://www.merriam-webster.com/slang/rickroll";
}


if (document.readyState !== 'loading') {
    code();
} else {
    document.addEventListener("DOMContentLoaded", function () {
        code();
    });
}

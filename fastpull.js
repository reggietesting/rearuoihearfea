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

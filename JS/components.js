fetch("./components/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").outerHTML = data;
    });


fetch("./components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").outerHTML = data;
    });
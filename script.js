let boxes = document.querySelectorAll(".box");
boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        let color = box.id;
        box.style.backgroundColor = color;
        if (color === "yellow") {
            box.style.color = "black";
        } else {
            box.style.color = "white";
        }
    });
});
let greetBtn = document.getElementById("greetBtn");
let username = document.getElementById("username");
let greeting = document.getElementById("greeting");
greetBtn.addEventListener("click", function() {
    let name = username.value.trim();
    if (name === "") {
        greeting.innerText = "Hello! Please enter your name.";
    } else {
        greeting.innerText = "Hello, " + name;
    }
});
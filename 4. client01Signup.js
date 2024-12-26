
const button = document.getElementById("button");
const mainHeading = document.getElementById("mainHeading");

button.addEventListener("click", (event) => {
    event.target.textContent = "Signing you in..Please Wait!";
    event.target.style.color = "whitesmoke";
    event.target.style.backgroundColor = "lightgreen";
});

mainHeading.addEventListener("mouseover", (event) => {
    event.target.style.color = "crimson";
    event.target.style.cursor = "pointer";
});

mainHeading.addEventListener("mouseout", (event) => {
    event.target.style.color = "black";
    event.target.style.cursor = "pointer";
});

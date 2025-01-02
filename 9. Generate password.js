//Random password generator

const passwordBox = document.getElementById("input");
const length = 12;
const button = document.getElementById("button");
const outro = document.getElementById("outro");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const specialCharacters = "!@#$%^&*()_-{[]}=+<>?/\|";

const allChars = upperCase + lowerCase + numbers + specialCharacters;

function generate(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

outro.addEventListener("mouseover", (event) => {
    event.target.textContent = "Click on generate button for a password";
    event.target.style.color = "green";
});
outro.addEventListener("mouseout", (event) => {
    event.target.textContent = "Hover me..For Help!";
    event.target.style.color = "whitesmoke";
});
outro.addEventListener("click", (event) => {
    event.target.textContent = "Click the generate button not me...🤕";
    event.target.style.color = "crimson";
})
// src/app.js

const adjectives = ["Cool", "Funky", "Loud", "Silent", "Epic", "Mysterious", "Electric", "Wild"];
const nouns = ["Tigers", "Dragons", "Wolves", "Eagles", "Sharks", "Bears", "Phoenixes", "Knights"];

function generateBandName() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("generate-button");
    const bandNameDisplay = document.getElementById("band-name");

    button.addEventListener("click", () => {
        const bandName = generateBandName();
        bandNameDisplay.textContent = bandName;
    });
});
// src/app.js

const adjectives = ["Cool", "Funky", "Loud", "Silent", "Epic", "Mysterious", "Electric", "Wild"];
const nouns = ["Tigers", "Dragons", "Wolves", "Eagles", "Sharks", "Bears", "Phoenixes", "Knights"];

function getAdjective() {
    return adjectives[Math.floor(Math.random() * adjectives.length)];
}

function getNoun() {
    return nouns[Math.floor(Math.random() * nouns.length)];
}

function generateBandName() {
    const adj = getAdjective();
    const noun = getNoun();
    return `The ${adj} ${noun}s`;
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("generate-button");
    const bandNameDisplay = document.getElementById("band-name");

    button.addEventListener("click", () => {
        const bandName = generateBandName();
        bandNameDisplay.textContent = bandName;
    });
});
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const openButton = document.getElementById("open");
const nextButton = document.getElementById("next");

function revealCard(card, content) {
  card.querySelector(".card-front").textContent = content;
  card.classList.add("revealed");
}

function resetCard(card) {
  card.querySelector(".card-front").textContent = "";
  card.classList.remove("revealed");
}

openButton.addEventListener("click", () => {
  const items = [
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)),
    "😺",
    "🐶"
  ];
  const alphabetOrEmoji = items[Math.floor(Math.random() * items.length)];
  const number = Math.floor(Math.random() * 10);

  revealCard(card1, alphabetOrEmoji);
  revealCard(card2, number);
});

nextButton.addEventListener("click", () => {
  resetCard(card1);
  resetCard(card2);
});

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const openButton = document.getElementById("open");
const nextButton = document.getElementById("next");

function flipCard(card, value) {
  card.querySelector(".front").classList.add("card-flip");
  card.querySelector(".back").classList.add("card-flip");
  card.querySelector(".back").textContent = value;
}

openButton.addEventListener("click", () => {
  const items = [
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)),
    "😺",
    "🐶"
  ];
  const alphabetOrEmoji = items[Math.floor(Math.random() * items.length)];
  const number = Math.floor(Math.random() * 10);

  flipCard(card1, alphabetOrEmoji);
  flipCard(card2, number);
});

nextButton.addEventListener("click", () => {
  card1.querySelector(".front").classList.remove("card-flip");
  card1.querySelector(".back").classList.remove("card-flip");
  card2.querySelector(".front").classList.remove("card-flip");
  card2.querySelector(".back").classList.remove("card-flip");
});

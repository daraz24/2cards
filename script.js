const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const openButton = document.getElementById("open");

function revealCard(card, content) {
  card.querySelector(".card-front").textContent = content;
  card.classList.add("revealed");
}

function showNewContent() {
  const items = [
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)),
    "😺",
    "🐶"
  ];
  const alphabetOrEmoji = items[Math.floor(Math.random() * items.length)];
  const number = Math.floor(Math.random() * 10);

  revealCard(card1, alphabetOrEmoji);
  revealCard(card2, number);
}

openButton.addEventListener("click", () => {
  if (card1.classList.contains("revealed")) {
    card1.classList.remove("revealed");
    card2.classList.remove("revealed");
    setTimeout(() => {
      showNewContent();
    }, 500);
  } else {
    showNewContent();
  }
});

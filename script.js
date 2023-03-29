const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const openButton = document.getElementById("open");
const nextButton = document.getElementById("next");

openButton.addEventListener("click", () => {
  const items = [
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)),
    "😺",
    "🐶"
  ];
  const alphabetOrEmoji = items[Math.floor(Math.random() * items.length)];
  const number = Math.floor(Math.random() * 10);

  card1.textContent = alphabetOrEmoji;
  card2.textContent = number;
});

nextButton.addEventListener("click", () => {
  card1.style.backgroundColor = "lightgray";
  card1.textContent = "";
  card2.style.backgroundColor = "lightgray";
  card2.textContent = "";
});

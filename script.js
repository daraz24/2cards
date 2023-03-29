const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const openButton = document.getElementById("open");
const nextButton = document.getElementById("next");

openButton.addEventListener("click", () => {
  const alphabet = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  const number = Math.floor(Math.random() * 10);

  card1.textContent = alphabet;
  card2.textContent = number;
});

nextButton.addEventListener("click", () => {
  card1.textContent = "裏";
  card2.textContent = "裏";
});

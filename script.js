let score = 0;
let timer;
let timeLeft = 10;

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const correctAnswer = num1 + num2;

  document.getElementById("question").textContent = `${num1} + ${num2} = ?`;

  return correctAnswer;
}

document.getElementById("answer").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Sayfanın yenilenmesini engeller
    document.getElementById("submit").click(); // Butonun click olayını tetikler
  }
});


let currentAnswer = generateQuestion();

document.getElementById("submit").addEventListener("click", () => {
  const userAnswer = parseInt(document.getElementById("answer").value);

  if (userAnswer === currentAnswer) {
    score++;
    document.getElementById("feedback").textContent = "✅ Doğru!";
  } else {
    document.getElementById("feedback").textContent = "❌ Yanlış!";
  }

  document.getElementById("score").textContent = `Skor: ${score}`;
  document.getElementById("answer").value = "";
  currentAnswer = generateQuestion();

  function generateQuestion() {
  clearInterval(timer); // Önceki zamanlayıcıyı durdur
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const correctAnswer = num1 + num2;

  document.getElementById("question").textContent = `${num1} + ${num2} = ?`;
  startTimer(); // Yeni zamanlayıcı başlat

  return correctAnswer;
}

});

function startTimer() {
  clearInterval(timer);
  timeLeft = 10;
  document.getElementById("feedback").textContent = `⏳ Süre: ${timeLeft} saniye`;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("feedback").textContent = `⏳ Süre: ${timeLeft} saniye`;

    if (timeLeft === 0) {
      clearInterval(timer);
      document.getElementById("feedback").textContent = "⏰ Süre doldu!";
      currentAnswer = generateQuestion();
    }
  }, 1000);
}


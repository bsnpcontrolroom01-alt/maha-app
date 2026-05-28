function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

  const nav = document.getElementById("bottomNav");

  if (pageId === "splash") {
    nav.classList.remove("show");
  } else {
    nav.classList.add("show");
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function unlockMessage() {
  document.getElementById("lockIcon").innerText = "🔓";
  document.getElementById("hiddenMessage").style.display = "block";
}

function openGift() {
  document.getElementById("giftBox").innerText = "💖";
  document.getElementById("surpriseMsg").style.display = "block";
  createConfetti();
}

function playVoice() {
  alert("Add your voice note file inside voice/message.mp3");
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = ["❤", "💗", "💕", "✨"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(function() {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 700);

function createConfetti() {
  const items = ["💖", "💕", "✨", "🌸", "🎉", "❤️"];

  for (let i = 0; i < 45; i++) {
    setTimeout(function() {
      const confetti = document.createElement("div");
      confetti.classList.add("heart");
      confetti.innerHTML = items[Math.floor(Math.random() * items.length)];
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.fontSize = Math.random() * 18 + 16 + "px";
      confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

      document.body.appendChild(confetti);

      setTimeout(function() {
        confetti.remove();
      }, 4000);
    }, i * 80);
  }
}
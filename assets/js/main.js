const flowerImages = [
    'assets/image/flowers/rose.png',
    'assets/image/flowers/tulip.png',
    'assets/image/flowers/daisy.png',
    'assets/image/flowers/sunflower.png',
    'assets/image/flowers/lily.png'
  ];

  const notes = [
    "Thank you so much for everything babe!",
    "You inspire people!",
    "You make a difference!",
    "Everyone appreciates you!",
    "Happy Teacher's Day!",
    "I love you so much, Monaaa ❤"
  ];

  function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    const size = 40 + Math.random() * 60; 
    flower.style.width = size + 'px';
    flower.style.height = size + 'px';

    flower.style.left = Math.random() * (window.innerWidth - size) + 'px';
    flower.style.top = Math.random() * (window.innerHeight - size) + 'px';

    const swayDuration = 3 + Math.random() * 3;
    flower.style.animation = `sway ${swayDuration}s ease-in-out infinite alternate`;

    const img = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    flower.style.backgroundImage = `url(${img})`;

    flower.addEventListener("click", (e) => {
      showNote(e.pageX, e.pageY);
    });

    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 15000);
  }

  setInterval(createFlower, 800);

  setTimeout(() => {
    document.getElementById("popup").classList.add("active");
  }, 3000);

  function closePopup() {
    document.getElementById("popup").classList.remove("active");
  }

  function showNote(x, y) {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerText = notes[Math.floor(Math.random() * notes.length)];
    note.style.left = (x - 50) + 'px';
    note.style.top = (y - 20) + 'px';

    document.body.appendChild(note);

    setTimeout(() => {
      note.remove();
    }, 2000);
  }

  const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    musicBtn.addEventListener("click", () => {
      if (music.muted) {
        music.muted = false;
        musicBtn.textContent = "🔊 Mute";
      } else {
        music.muted = true;
        musicBtn.textContent = "🔇 Unmute";
      }
    });

    function createSparkle() {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = Math.random() * window.innerWidth + 'px';
      sparkle.style.top = Math.random() * window.innerHeight + 'px';
      sparkle.style.animationDuration = (2 + Math.random() * 3) + 's';
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 4000);
    }

    setInterval(createSparkle, 500);

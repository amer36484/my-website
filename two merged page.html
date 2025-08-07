<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Combined 3D City & Delivery Animation</title>
<style>
  /* Genel reset ve body ayarları */
  * {
    box-sizing: border-box;
  }
  body, html {
    margin: 0;
    height: 100vh;
    background: linear-gradient(to top, #1e3c72, #2a5298);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    perspective: 1200px;
  }

  /* --- 3D City Scene CSS (ufak düzenleme) --- */

  .city-scene {
    position: relative;
    width: 50vw;
    height: 90vh;
    overflow: visible;
    transform-style: preserve-3d;
    perspective-origin: center bottom;
    background: #2c3e50;
    border-radius: 10px;
    box-shadow: 0 0 40px rgba(0,0,0,0.6);
  }

  .ground {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 2000px;
    height: 400px;
    background: #2c3e50;
    border-radius: 50% / 20%;
    transform: translateX(-50%) translateZ(-200px) rotateX(75deg);
    box-shadow: inset 0 20px 50px rgba(255,255,255,0.1);
  }

  .building {
    position: absolute;
    bottom: 0;
    width: 80px;
    background: linear-gradient(135deg, #4a90e2, #357ABD);
    box-shadow: 0 0 20px rgba(53,122,189,0.7);
    transform-style: preserve-3d;
    border: 2px solid #275d9e;
    border-bottom: 5px solid #1f3e6d;
    transition: transform 0.5s ease;
    cursor: pointer;
  }
  .building:hover {
    transform: translateZ(50px) scale(1.05);
    box-shadow: 0 0 40px rgba(53,122,189,1);
  }

  .building-top {
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(135deg, #7bb6ff, #4a90e2);
    border-radius: 4px 4px 0 0;
    box-shadow: inset 0 5px 10px rgba(255,255,255,0.5);
    transform-style: preserve-3d;
  }

  .b1 { height: 150px; left: 200px; }
  .b2 { height: 230px; left: 300px; }
  .b3 { height: 180px; left: 400px; }
  .b4 { height: 280px; left: 520px; }
  .b5 { height: 200px; left: 620px; }
  .b6 { height: 160px; left: 740px; }
  .b7 { height: 270px; left: 860px; }
  .b8 { height: 220px; left: 980px; }
  .b9 { height: 180px; left: 1100px; }
  .b10 { height: 210px; left: 1220px; }

  .street {
    position: absolute;
    bottom: 350px;
    left: 50%;
    width: 1200px;
    height: 6px;
    background: repeating-linear-gradient(
      90deg,
      #555,
      #555 20px,
      #777 20px,
      #777 40px
    );
    transform: translateX(-50%) translateZ(10px) rotateX(75deg);
    box-shadow: 0 0 10px rgba(255,255,255,0.1);
  }

  /* --- Delivery Animation CSS (ufak düzenleme) --- */

  .delivery-scene {
    position: relative;
    width: 40vw;
    height: 350px;
    background: #6ab04c; /* grass green */
    border-radius: 0 0 20px 20px;
    box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);
    transform-style: preserve-3d;
  }

  .house {
    position: absolute;
    bottom: 0;
    left: 50px;
    width: 180px;
    height: 180px;
    background: #f6e58d;
    border: 4px solid #f9ca24;
    border-radius: 10px;
    box-shadow:
      10px 10px 15px rgba(0,0,0,0.2),
      inset 0 5px 10px rgba(255,255,255,0.5);
    transform: translateZ(20px) rotateX(5deg);
  }
  .roof {
    position: absolute;
    top: -70px;
    left: 0;
    width: 180px;
    height: 70px;
    background: #eb4d4b;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
    transform: translateZ(40px) rotateX(10deg);
  }
  .door {
    position: absolute;
    bottom: 0;
    left: 70px;
    width: 45px;
    height: 90px;
    background: #686de0;
    border-radius: 6px;
    box-shadow: inset 0 0 15px rgba(0,0,0,0.3);
    transform: translateZ(25px) rotateX(5deg);
  }

  .person {
    position: absolute;
    bottom: 0;
    left: 260px;
    width: 70px;
    height: 130px;
    background: linear-gradient(145deg, #f9f871, #d6d633);
    border-radius: 35px 35px 20px 20px;
    box-shadow:
      inset 0 -15px 20px rgba(0,0,0,0.15),
      5px 5px 15px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    user-select: none;
    transition: transform 0.5s ease;
    transform-style: preserve-3d;
  }

  .courier {
    position: absolute;
    bottom: 0;
    left: -100px;
    width: 70px;
    height: 130px;
    background: linear-gradient(145deg, #f0932b, #d46c06);
    border-radius: 35px 35px 20px 20px;
    box-shadow:
      inset 0 -15px 20px rgba(0,0,0,0.15),
      5px 5px 15px rgba(0,0,0,0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    user-select: none;
    transition: left 3s ease-in-out;
    cursor: pointer;
    transform-style: preserve-3d;
  }

  .courier.active {
    left: 350px; /* in front of person */
  }

  .thank-you {
    position: absolute;
    bottom: 180px;
    left: 310px;
    font-size: 26px;
    font-weight: 700;
    color: #2d3436;
    opacity: 0;
    transition: opacity 1s ease;
    user-select: none;
    transform-style: preserve-3d;
  }

  .thank-you.show {
    opacity: 1;
  }

  .order-button {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    padding: 14px 36px;
    font-size: 20px;
    background: linear-gradient(90deg, #ff416c, #ff4b2b);
    border: none;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(255, 65, 108, 0.5);
    transition: transform 0.3s ease;
    z-index: 10;
    user-select: none;
  }

  .order-button:hover {
    transform: scale(1.08);
  }

</style>
</head>
<body>

  <div class="city-scene" role="main" aria-label="3D city scene">

    <div class="ground"></div>

    <!-- Buildings -->
    <div class="building b1" tabindex="0" aria-label="Building 1">
      <div class="building-top"></div>
    </div>
    <div class="building b2" tabindex="0" aria-label="Building 2">
      <div class="building-top"></div>
    </div>
    <div class="building b3" tabindex="0" aria-label="Building 3">
      <div class="building-top"></div>
    </div>
    <div class="building b4" tabindex="0" aria-label="Building 4">
      <div class="building-top"></div>
    </div>
    <div class="building b5" tabindex="0" aria-label="Building 5">
      <div class="building-top"></div>
    </div>
    <div class="building b6" tabindex="0" aria-label="Building 6">
      <div class="building-top"></div>
    </div>
    <div class="building b7" tabindex="0" aria-label="Building 7">
      <div class="building-top"></div>
    </div>
    <div class="building b8" tabindex="0" aria-label="Building 8">
      <div class="building-top"></div>
    </div>
    <div class="building b9" tabindex="0" aria-label="Building 9">
      <div class="building-top"></div>
    </div>
    <div class="building b10" tabindex="0" aria-label="Building 10">
      <div class="building-top"></div>
    </div>

    <div class="street"></div>

  </div>

  <div class="delivery-scene" aria-label="Delivery scene with house, person and courier">
    <div class="house" role="img" aria-label="House">
      <div class="roof"></div>
      <div class="door"></div>
    </div>
    <div class="person" id="person" role="img" aria-label="Person">🧍</div>
    <div class="courier" id="courier" role="img" aria-label="Courier">🚚</div>
    <div class="thank-you" id="thankYou" role="alert">Thank you!</div>

    <button class="order-button" id="orderBtn" aria-live="polite" aria-label="Order now">Order Now</button>
  </div>

  <audio id="deliverySound" src="https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg" preload="auto"></audio>
  <audio id="thankYouSound" src="https://actions.google.com/sounds/v1/human_voices/applause.ogg" preload="auto"></audio>

  <script>
    // Building light pulse animation
    const buildings = document.querySelectorAll('.building');
    buildings.forEach((b, i) => {
      setInterval(() => {
        b.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.3)';
        setTimeout(() => {
          b.style.boxShadow = '0 0 20px rgba(53,122,189,0.7)';
        }, 800);
      }, 4000 + i * 500);
    });

    // Delivery animation
    const courier = document.getElementById('courier');
    const thankYou = document.getElementById('thankYou');
    const orderBtn = document.getElementById('orderBtn');
    const deliverySound = document.getElementById('deliverySound');
    const thankYouSound = document.getElementById('thankYouSound');

    orderBtn.addEventListener('click', () => {
      thankYou.classList.remove('show');
      courier.style.left = '-100px';
      courier.textContent = '🚚';

      setTimeout(() => {
        courier.classList.add('active');
        deliverySound.play();
      }, 100);

      setTimeout(() => {
        courier.textContent = '🤝📦';
      }, 3000);

      setTimeout(() => {
        thankYou.classList.add('show');
        thankYouSound.play();
      }, 4000);

      setTimeout(() => {
        courier.classList.remove('active');
        courier.style.left = '-100px';
        courier.textContent = '🚚';
      }, 6500);
    });
  </script>

</body>
</html>

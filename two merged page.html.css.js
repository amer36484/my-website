<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>3D City Delivery</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #87CEEB; overflow: hidden; }

    canvas { display: block; }

    #overlay {
      position: absolute;
      top: 10px;
      left: 10px;
      background: rgba(255,255,255,0.8);
      padding: 10px;
      font-family: Arial, sans-serif;
      z-index: 10;
    }
  </style>
</head>
<body>
  <div id="overlay">🎁 3D City – Cargo Delivery</div>

  <audio id="thankYouSound" src="https://actions.google.com/sounds/v1/human_voices/thank_you_female.ogg"></audio>
  <audio id="bgMusic" src="https://cdn.pixabay.com/audio/2023/03/31/audio_ee0cf2cbdc.mp3" loop autoplay></audio>

  <script type="module">
    import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js';
    import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160.1/examples/jsm/controls/OrbitControls.js';

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set(10, 15, 20);
    controls.update();

    // Light
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshPhongMaterial({color: 0x228B22})
    );
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // Simple buildings
    const buildingMaterial = new THREE.MeshPhongMaterial({color: 0x999999});
    for(let i=0; i<20; i++) {
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(2, Math.random()*6 + 2, 2),
        buildingMaterial
      );
      box.position.x = Math.random() * 40 - 20;
      box.position.z = Math.random() * 40 - 20;
      box.position.y = box.geometry.parameters.height / 2;
      scene.add(box);
    }

    // House
    const house = new THREE.Mesh(
      new THREE.BoxGeometry(3, 2, 3),
      new THREE.MeshPhongMaterial({color: 0xffcc66})
    );
    house.position.set(0, 1, 0);
    scene.add(house);

    // Human
    const human = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.3, 1.5, 16),
      new THREE.MeshPhongMaterial({color: 0x0000ff})
    );
    human.position.set(2, 0.75, 0);
    scene.add(human);

    // Cargo Drone
    const drone = new THREE.Mesh(
      new THREE.BoxGeometry(1, 0.3, 1),
      new THREE.MeshPhongMaterial({color: 0xff0000})
    );
    drone.position.set(2, 10, 0);
    scene.add(drone);

    // Delivery Logic
    let delivered = false;

    function animate() {
      requestAnimationFrame(animate);
      controls.update();

      // Drone comes down
      if (drone.position.y > 2 && !delivered) {
        drone.position.y -= 0.05;
      } else if (!delivered) {
        delivered = true;
        document.getElementById("thankYouSound").play();
      }

      renderer.render(scene, camera);
    }
    animate();

    // Resize fix
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  </script>
</body>
</html>

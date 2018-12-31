var camera, scene, renderer, controls;
THREE.ImageUtils.crossOrigin = "";
init();
animate();
function init() {
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.set(-1000, 200, 2000);

  controls = new THREE.OrbitControls(camera);
  controls.target.set(0, 0, 0);

  scene = new THREE.Scene();

  var loader = new THREE.FontLoader();
  loader.crossOrigin = '';
  loader.load("https://s3.amazonaws.com/aws-codestar-us-east-1-562663496915-xikawa-app/public/assets/js/helvetiker_regular.typeface.json", function(font) {
    var xMid, text;
    var textShape = new THREE.BufferGeometry();
    var textShape2 = new THREE.BufferGeometry();
    var textShape3 = new THREE.BufferGeometry();
    var color = 0x006699;
    var matDark = new THREE.LineBasicMaterial({
      color: color,
      side: THREE.DoubleSide
    });

    var matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });

    var message = "What Corey Thinks";
    var shapes = font.generateShapes(message, 100, 2);
    var geometry = new THREE.ShapeGeometry(shapes);
    geometry.computeBoundingBox();
    xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(0, 0, 0);
    // make shape ( N.B. edge view not visible )
    textShape.fromGeometry(geometry);
    text = new THREE.Mesh(textShape, matLite);
    text.position.z = -500;
    scene.add(text);

    var message2 = "What Adam Thinks";
    var shapes2 = font.generateShapes(message2, 100, 2);
    var geometry2 = new THREE.ShapeGeometry(shapes2);
    textShape2.fromGeometry(geometry2);
    text2 = new THREE.Mesh(textShape2, matLite);
    text2.position.z = +500;
    scene.add(text2);

    var message3 = "PysQualogy:The goal";
    var shapes3 = font.generateShapes(message3, 100, 2);
    var geometry3 = new THREE.ShapeGeometry(shapes3);
    textShape3.fromGeometry(geometry3);
    text3 = new THREE.Mesh(textShape3, matLite);
    text3.position.x = -1500;
    scene.add(text3);

    var geometry4 = new THREE.PlaneGeometry(2000, 2000);
    var material4 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    var mesh = new THREE.Mesh(geometry4, material4);
    mesh.position.x = 900;
    mesh.position.z = 300;
    scene.add(mesh);

    var geometry5 = new THREE.PlaneGeometry(2000, 2000);
    var material5 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    var mesh2 = new THREE.Mesh(geometry5, material5);
    mesh2.position.x = 900;
    mesh2.position.z = -300;
    scene.add(mesh2);

    // add it to the WebGL scene
    scene.add(planeMesh);
  }); //end load function
  //createCloud()
  var material = new THREE.MeshBasicMaterial({ wireframe: true });
  var geometry4 = new THREE.PlaneGeometry();
  var planeMesh = new THREE.Mesh(geometry4, material);
  // add it to the WebGL scene
  scene.add(planeMesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x33abf9);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize, false);
} // end init

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  render();
}

function render() {
  controls.update();
  renderer.render(scene, camera);
}
function createCloud() {
  /*

			  var div = document.createElement( 'div'  );
			  div.className = 'cloudBase';
			  var t = 'translateX( ' + random_x() + 'px ) \
			    translateY( ' + random_x() + 'px ) \
			    translateZ( ' + random_x() + 'px )';
			  div.style.transform = t;
			  scene.appendChild( div );

			  for( var j = 0; j < 5 + Math.round( Math.random() * 10 ); j++ ) {
			    var cloud = document.createElement( 'div' );
			    cloud.className = 'cloudLayer';

			    cloud.data = {
			      x: random_x(),
			      y: random_x(),
			      z: random_x(),
			      a: random_x(),
			      s: random_x()
			    };
			    var t = 'translateX( ' + random_x() + 'px ) \
			      translateY( ' + random_x() + 'px ) \
			      translateZ( ' + random_x() + 'px ) \
			      rotateZ( ' + random_x() + 'deg ) \
			      scale( ' + random_x() + ' )';
			    cloud.style.transform = t;

			    div.appendChild( cloud );
			    layers.push( cloud );
			  }

			  return div;   */
}
function random_x() {
  return 10 * Math.random() - 5;
}
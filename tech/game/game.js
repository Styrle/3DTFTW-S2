var floor = [];

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 3;
camera.rotation.x = -0.2;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
// this tells the browser the canvas size and what it should render out as which is
//the size of the browser, I have also added this into the style in html so the canvas resizes
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; //default
//this allows us to add sound througout the program

//2 lights will give us the ability to light up the scene

var light1 = new THREE.DirectionalLight(0x000000, 1);
light1.position.set(10, 10, -2);
light1.castShadow = true;

var light2 = new THREE.DirectionalLight( 0x000000, 1);
light2.position.set(-5, 5, -1);
light2.castShadow = true;


light1.shadow.camera.top = 10;
light1.shadow.camera.bottom = -10;
light1.shadow.camera.left = -10;
light1.shadow.camera.right = 10;

light1.shadow.mapSize.width = 512;
light1.shadow.mapSize.height = 512;
light1.shadow.camera.near = 0.5;
light1.shadow.camera.far = 300;

light2.shadow.camera.top = 20;
light2.shadow.camera.bottom = -20;
light2.shadow.camera.left = -20;
light1.shadow.camera.right = 20;

light2.shadow.mapSize.width = 512;
light2.shadow.mapSize.height = 512;
light2.shadow.camera.near = 0.5;
light2.shadow.camera.far = 500;

scene.add(light1, light2);

//Creating fog to give the game a endless effect
fogColor = new THREE.Color(0xecf0f1); //here we can change the colour of the fog, we can also change the size of the background light from this
scene.background = fogColor;
scene.fog = new THREE.Fog(fogColor, 0.00005, 55);


class Setup {
  constructor(){
  }

  Update(){
}
  Reset(){

  }
}

var geometry = new THREE.PlaneGeometry( 10, 100, 0.1, 0.1 );
var material = new THREE.MeshBasicMaterial( { color: 0x3498DB } );
var floor = new THREE.Mesh( geometry, material );
floor.material.side = THREE.DoubleSide;
floor.rotation.x = 143;
scene.add( this.floor );



class GameFlow{
    constructor(){

    }
    Update(){

        switch (this.currentState ){


				}
		}
};

class Services{
    constructor(){

    }
    Update(){

    }
};



var gameFlow = new GameFlow();

var animate = function (){
    requestAnimationFrame( animate );


    gameFlow.Update();

    renderer.render (scene, camera);

};

animate();

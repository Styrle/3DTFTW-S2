var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 20; //Here we are changing the depth of the corridor
camera.position.y = 4;
camera.rotation.x = -0.4;

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
scene.fog = new THREE.Fog(fogColor, 0.1, 100);

//here we are creating our background for the scene
var geometry = new THREE.PlaneGeometry( 20, 150, 3, 3 );
var material = new THREE.MeshBasicMaterial( { color: 0x3498DB } );
var floor = new THREE.Mesh( geometry, material );
floor.material.side = THREE.DoubleSide;
floor.rotation.y = 0;
floor.rotation.x = 143;
var floor2 = new THREE.Mesh( geometry, material );
floor2.material.side = THREE.DoubleSide;
floor2.position.x = 3;
floor2.rotation.y = 139.9;
floor2.rotation.x = 143;
var floor3 = new THREE.Mesh( geometry, material );
floor3.material.side = THREE.DoubleSide;
floor3.position.y = 8;
floor3.rotation.x = 143;
floor3.rotation.x = 143;
var floor4 = new THREE.Mesh( geometry, material );
floor4.material.side = THREE.DoubleSide;
floor4.position.x = -6;
floor4.rotation.y = 140;
floor4.rotation.x = 143;

var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var head = new THREE.Mesh( geometry, material );
head.position.x = -1.5;
head.position.y = 4.4;
head.position.z = 9;

var geometry = new THREE.BoxBufferGeometry( 0.5, 1, 0.5 );
var material = new THREE.MeshBasicMaterial( {color: 0xf9ca24} );
var neck = new THREE.Mesh( geometry, material );
neck.position.x = -1.5;
neck.position.y = 4;
neck.position.z = 9;

var geometry = new THREE.BoxBufferGeometry( 2, 3, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0xffbe76} );
var body = new THREE.Mesh( geometry, material );
body.position.x = -1.5;
body.position.y = 2;
body.position.z = 9;

var geometry = new THREE.BoxBufferGeometry( 0.7, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0xf9ca24} );
var lLeg = new THREE.Mesh( geometry, material );
lLeg.position.x = -2;
lLeg.position.y = 0;
lLeg.position.z = 8.5;

var geometry = new THREE.BoxBufferGeometry( 0.7, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0xf9ca24} );
var rleg = new THREE.Mesh( geometry, material );
rleg.position.x = -1;
rleg.position.y = 0;
rleg.position.z = 8.5;


var character = new THREE.Group();
character.add( head );
character.add( neck );
character.add( body );
character.add( lLeg );
character.add( rleg );
character.position.x = -1;
character.position.y = 0;
character.position.z = 5;

var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var head2 = new THREE.Mesh( geometry, material );
head2.position.x = -1.5;
head2.position.y = 4.4;
head2.position.z = 9;

var geometry = new THREE.BoxBufferGeometry( 0.5, 1, 0.5 );
var material = new THREE.MeshBasicMaterial( {color: 0xf9ca24} );
var neck2 = new THREE.Mesh( geometry, material );
neck2.position.x = -1.5;
neck2.position.y = 4;
neck2.position.z = 9;

var geometry = new THREE.BoxBufferGeometry( 2, 3, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0xffbe76} );
var body2 = new THREE.Mesh( geometry, material );
body2.position.x = -1.5;
body2.position.y = 2;
body2.position.z = 9;

var geometry = new THREE.BoxBufferGeometry( 0.7, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0xf9ca24} );
var lLeg2 = new THREE.Mesh( geometry, material );
lLeg2.position.x = -2;
lLeg2.position.y = 0;
lLeg2.position.z = 8.5;

var geometry = new THREE.BoxBufferGeometry( 0.7, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0xf9ca24} );
var rleg2 = new THREE.Mesh( geometry, material );
rleg2.position.x = -1;
rleg2.position.y = 0;
rleg2.position.z = 8.5;


var character2 = new THREE.Group();
character2.add( head2 );
character2.add( neck2 );
character2.add( body2 );
character2.add( lLeg2 );
character2.add( rleg2 );
character2.position.x = 3;
character2.position.y = 2;
character2.position.z = -40;

character3 = character2.clone();
character3.position.x = 3;
character3.position.y = 2;
character3.position.z = -20;

scene.add(this.floor, this.floor2, this.floor3, this.floor4, this.character, this.character2, this.character3);




class Knot {
  constructor(){
    this.geometryKnot = new THREE.TorusKnotGeometry(0.5, 0.25, 100, 16);
    this.materialKnot = new THREE.MeshStandardMaterial({color: 0x2AD7FD});
    this.mesh = new THREE.Mesh(this.geometryKnot, this.materialKnot);

    this.mesh.position.x = posX;
    this.mesh.position.y = posY;

    this.mesh.castShadow = true; //default values
    this.mesh.receiveShadow = false;

    this.rate = rate;

    scene.add(this.mesh);
  }

  Update(){
}
  Reset(){

  }
}

class Background{
    constructor(){

    }
    Update(){

    }
};





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

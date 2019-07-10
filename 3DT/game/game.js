Character = [];

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 18; //Here we are changing the depth of the corridor
camera.position.y = 6;
camera.rotation.x = -0.4;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; //default


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




scene.add( this.floor, this.floor2, this.floor3, this.floor4 );

class Service{
    constructor(){

    }
    Update(){

    }
};

function onDocumentKeyDown(event) {
    var keyCode = event.keyCode;
    keyboard.keys[keyCode]=true;
};

function onDocumentKeyUp(event) {
    var keyCode = event.keyCode;
    keyboard.keys[keyCode]=false;
};

class KeyboardService extends Service{
    constructor(){
        super();
        document.addEventListener("keydown", onDocumentKeyDown, false);
        document.addEventListener("keyup", onDocumentKeyUp, false);

        this.keys=[];

    }
    Update(){

    }

    IsKeydown(keyCode){
        return this.keys[keyCode];
    }
};


class Entity {
  constructor(){
  }

  Update(){

  }

  Reset(){

  }
}



class Box extends Entity{
    constructor(posX, posY, rate){
        super();
        this.collidable = true;
        this.size = 1;
        this.geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
        this.material = new THREE.MeshBasicMaterial ( {color: 0xf9ca24} ); /*( {map: new THREE.TextureLoader( ).load('../images/angry.png'), side: THREE.FrontSide} );var head = new THREE.Mesh( geometry, material );*/
        this.head = new THREE.Mesh( this.geometry, this.material );
        this.head.position.x = -1.5;
        this.head.position.y = 4.5;
        this.head.position.z = 9;

        this.geometry = new THREE.BoxBufferGeometry( 0.5, 1, 0.5 );
        this.material = new THREE.MeshBasicMaterial( {color: 0xf9ca24} );
        this.neck = new THREE.Mesh( this.geometry, this.material );
        this.neck.position.x = -1.5;
        this.neck.position.y = 4;
        this.neck.position.z = 9;

        this.geometry = new THREE.BoxBufferGeometry( 2, 3, 1 );
        this.material = new THREE.MeshBasicMaterial( {color: 0xffbe76} );
        this.body = new THREE.Mesh( this.geometry, this.material );
        this.body.position.x = -1.5;
        this.body.position.y = 2;
        this.body.position.z = 9;

        this.geometry = new THREE.BoxBufferGeometry( 0.7, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( {color: 0xf9ca24} );
        this.lLeg = new THREE.Mesh( this.geometry, this.material );
        this.lLeg.position.x = -2;
        this.lLeg.position.y = 0;
        this.lLeg.position.z = 8.5;

        this.geometry = new THREE.BoxBufferGeometry( 0.7, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( {color: 0xf9ca24} );
        this.rleg = new THREE.Mesh( this.geometry, this.material );
        this.rleg.position.x = -1;
        this.rleg.position.y = 0;
        this.rleg.position.z = 8.5;

        this.mesh = new THREE.Group();
        this.mesh.add(this.head);
        this.mesh.add(this.neck);
        this.mesh.add(this.body);
        this.mesh.add(this.lLeg);
        this.mesh.add(this.rleg);
        this.mesh.position.x = 20;
        this.mesh.position.y = 5;
        this.mesh.position.z = -20;

        this.mesh1 = this.mesh.clone();
        this.mesh1.position.x = 3;
        this.mesh1.position.y = 1.5;
        this.mesh1.position.z = -20;
        this.mesh.position.x = posX;
        this.mesh.position.y = posY;

        this.mesh.castShadow = true; //default values
        this.mesh.receiveShadow = false;

        this.rate = rate;

        scene.add(this.mesh, this.mesh1);
    }


    DistanceTo(x, z) {
        // (xA-xB)²+(yA-yB)²+(zA-zB)² < (rA+rB)²
        let dist = Math.abs ( Math.sqrt (
          ( ( this.mesh.position.x - x ) * ( this.mesh.position.x - x ) ) +
          ( ( this.mesh.position.z - z ) * ( this.mesh.position.z - z ) )) );

        // console.log("DistanceTo() = " + dist);
        return dist;
    }

    IsCollideWith(that){
      // size + size > distance
      let collidedWith = (this.size + that.size) > this.DistanceTo(this.mesh.position.x, that.mesh.position.z);
      // console.log("IsCollidedWith() " + collidedWith + " " + (this.size + that.size));
      return collidedWith;
    }

    CollideWithObstacle(){
      for (var n=0; n<Character.length; n++ ){
        if (Character[n].collidable == true){
          if (this.IsCollideWith(Character[n]) == true){
            return true;
          }
        }
      }
      return false;
    }
    Reset(){
        super.Reset();
    }

    Update(){
        super.Update();
        if ( this.CollideWithObstacle() )
          {
            //   console.log(" ------ CRASH ------- ");
          }
        }

}

class Avatar extends Entity{
    constructor(posX, posY, rate, colFam){
        super();
        this.collidable = false;
        this.size = 1.0;

        this.geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
        this.material = new THREE.MeshBasicMaterial ( {color: 0xf9ca24} ); /*( {map: new THREE.TextureLoader( ).load('../images/angry.png'), side: THREE.FrontSide} );var head = new THREE.Mesh( geometry, material );*/
        this.head = new THREE.Mesh( this.geometry, this.material );
        this.head.position.x = 1;
        this.head.position.y = 4.4;
        this.head.position.z = 9;

        this.geometry = new THREE.BoxBufferGeometry( 0.5, 1, 0.5 );
        this.material = new THREE.MeshBasicMaterial( {color: 0xf9ca24} );
        this.neck = new THREE.Mesh( this.geometry, this.material );
        this.neck.position.x = 1;
        this.neck.position.y = 4;
        this.neck.position.z = 9;

        this.geometry = new THREE.BoxBufferGeometry( 2, 3, 1 );
        this.material = new THREE.MeshBasicMaterial( {color: 0xffbe76} );
        this.body = new THREE.Mesh( this.geometry, this.material );
        this.body.position.x = 1;
        this.body.position.y = 2;
        this.body.position.z = 9;

        this.geometry = new THREE.BoxBufferGeometry( 0.7, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( {color: 0xf9ca24} );
        this.lLeg = new THREE.Mesh( this.geometry, this.material );
        this.lLeg.position.x = 0.5;
        this.lLeg.position.y = 0;
        this.lLeg.position.z = 8.5;

        this.geometry = new THREE.BoxBufferGeometry( 0.7, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( {color: 0xf9ca24} );
        this.rleg = new THREE.Mesh( this.geometry, this.material );
        this.rleg.position.x = 1.5;
        this.rleg.position.y = 0;
        this.rleg.position.z = 8.5;

        this.mesh = new THREE.Group();
        this.mesh.add(this.head);
        this.mesh.add(this.neck);
        this.mesh.add(this.body);
        this.mesh.add(this.lLeg);
        this.mesh.add(this.rleg);
        this.mesh.position.x = 10;
        this.mesh.position.y = 0;
        this.mesh.position.z = 5;

        this.mesh.position.x = posX;
        this.mesh.position.y = posY;


        this.mesh.castShadow = true; //default values
        this.mesh.receiveShadow = false;

        this.rate = rate;

        scene.add(this.mesh);
    }

    Move(){
      var controlSpeed  = 0.07;
      //upArrow
     // A - move left
      if (keyboard.IsKeydown(65) == true) {
          this.mesh.position.x -= controlSpeed;
      } // D - move right
      if (keyboard.IsKeydown(68) == true) {
          this.mesh.position.x += controlSpeed;
        }
        // W Key - move futher away
      if (keyboard.IsKeydown(87) == true){
        this.mesh.position.z -= controlSpeed;
      } // S Key - move closer
      if (keyboard.IsKeydown(83) == true){
        this.mesh.position.z += controlSpeed;
      }  //Spacebar
      if (keyboard.IsKeydown(32) == true) {
          this.mesh.position.x = 0;
          this.mesh.position.y = 0;
          this.mesh.position.z = 0;
      }
    }

    DistanceTo(x, z) {
        let dist = Math.abs ( Math.sqrt (
          ( ( this.mesh.position.x - x ) * ( this.mesh.position.x - x ) ) +
          ( ( this.mesh.position.z - z ) * ( this.mesh.position.z - z ) )) );

        return dist;
    }

    IsCollideWith(that){
      let collidedWith = (this.size + that.size) > this.DistanceTo(this.mesh.position.x, that.mesh.position.z);
      return collidedWith;
    }

    CollideWithObstacle(){
      for (var n=0; n<Character.length; n++ ){
        if (Character[n].collidable == true){
          if (this.IsCollideWith(Character[n]) == true){
            return true;
          }
        }
      }
      return false;
    }

    Reset(){
        super.Reset();
    }
    Update(){
        super.Update();

        if ( this.CollideWithObstacle() )
          {
            document.getElementById("demo").innerHTML = "Yeah, no one likes you here, you should just leave and never come back. Everyone in class hates you, you have no friends.";
            console.log(document.getElementById("demo").innerHTML);
            }

          this.Move()

    }

}

// ( {map: new THREE.TextureLoader( ).load('../images/angry.png'), side: THREE.FrontSide} );
var mainGuy = new Avatar(-3, 1, 50.02);
Character.push(mainGuy);


for (let i=0; i<1; i++){
    Character.push(new Box(i, 1.5, 0.02));
}

var keyboard = new KeyboardService();



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



var animate = function (){
    requestAnimationFrame( animate );

    for (let i = 0; i<Character.length; i++){
        Character[i].Update();
    }


    renderer.render (scene, camera);

};

animate();

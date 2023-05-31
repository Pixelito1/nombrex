const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

effect = new THREE.StereoEffect( renderer );
    effect.setSize( window.innerWidth, window.innerHeight );

var controls = new THREE.DeviceOrientationControls(camera);

const listener = new THREE.AudioListener();
camera.add( listener ); 

const audioElement = document.getElementById( 'music' );
//audioElement.play();

const positionalAudio = new THREE.PositionalAudio( listener );
positionalAudio.setMediaElementSource( audioElement );
positionalAudio.setRefDistance( 1 );
positionalAudio.setDirectionalCone( 180, 230, 0.1 );

camera.position.z = 5;

var Cubes = [];
for(var i=0; i<=20; i++)
{
    var cube1 = new ObjectCreate(0,i*2,0,i*20);
    Cubes.push(cube1);
}

function animate() {
	requestAnimationFrame( animate );
    
    for(var i = 0; i<=20; i++)
    {    
        Cubes[i].update();
    }
    controls.update();
	effect.render( scene, camera );
}

animate();
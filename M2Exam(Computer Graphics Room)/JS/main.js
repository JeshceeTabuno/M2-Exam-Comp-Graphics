const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
scene.background = new THREE.Color( 0xFFFFFF);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Sample Program
// const torusgeometry = new THREE.TorusGeometry(6.688, 0.8712, 16, 101);
// const torusmaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
// const torus = new THREE.Mesh( torusgeometry, torusmaterial );
// scene.add( torus );

//Floor 
const floorgeometry = new THREE.BoxGeometry( 100, 39, 15 );
const floormaterial = new THREE.MeshBasicMaterial( {color: 0xAE6744} );
const floor = new THREE.Mesh( floorgeometry , floormaterial );
scene.add( floor );

//BED
const bedgeometry = new THREE.BoxGeometry( 40, 8, 1 );
const bedmaterial = new THREE.MeshBasicMaterial( {color: 0x427B42} );
const bed= new THREE.Mesh( bedgeometry , bedmaterial );
scene.add( bed);

//Pillow
const pillowgeometry = new THREE.BoxGeometry( 10, 3, 1 );
const pillowmaterial = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
const pillow= new THREE.Mesh( pillowgeometry , pillowmaterial );
scene.add(pillow);

//Wall
const wallgeometry = new THREE.BoxGeometry( 150, 50, 1 );
const wallmaterial = new THREE.MeshBasicMaterial( {color: 0xCC6634} );
const wall = new THREE.Mesh( wallgeometry , wallmaterial );
scene.add( wall );



//Window
const windowgeometry = new THREE.BoxGeometry( 30, 15, 1 );
const windowmaterial = new THREE.MeshBasicMaterial( {color: 0x65EBED } );
const roomwindow = new THREE.Mesh( windowgeometry , windowmaterial );
scene.add( roomwindow );

const windowbordergeometry = new THREE.BoxGeometry( 30, 2, 1 );
const windowbordermaterial = new THREE.MeshBasicMaterial( {color: 0x1F1E1E} );
const roomwindow2 = new THREE.Mesh( windowbordergeometry , windowbordermaterial );
scene.add( roomwindow2 );

//Curtain

const curtainbargeometry = new THREE.BoxGeometry( 35, 1, 1 );
const curtainbarmaterial = new THREE.MeshBasicMaterial( {color: 0x706C6C} );
const curtainbar = new THREE.Mesh( curtainbargeometry , curtainbarmaterial );
scene.add( curtainbar );

const curtainballgeometry= new THREE.IcosahedronGeometry(1,5);
const curtainballmaterial=new THREE.MeshBasicMaterial( {color: 0x706C6C} );
const curtainball= new THREE.Mesh(curtainballgeometry,curtainballmaterial);
scene.add( curtainball);

const curtainball2geometry= new THREE.IcosahedronGeometry(1,5);
const curtainball2material=new THREE.MeshBasicMaterial( {color: 0x706C6C} );
const curtainball2= new THREE.Mesh(curtainball2geometry,curtainball2material);
scene.add( curtainball2);

const curtaingeometry = new THREE.BoxGeometry( 8.5, 15, 1 );
const curtainmaterial = new THREE.MeshBasicMaterial( {color: 0x95C8C9} );
const curtain = new THREE.Mesh( curtaingeometry , curtainmaterial );
scene.add( curtain );

const curtain2geometry = new THREE.BoxGeometry( 8.5, 15, 1 );
const curtain2material = new THREE.MeshBasicMaterial( {color: 0x95C8C9} );
const curtain2 = new THREE.Mesh( curtain2geometry , curtain2material );
scene.add( curtain2);


//Desk
const deskgeometry = new THREE.BoxGeometry( 25, 1, 1 );
const deskmaterial = new THREE.MeshBasicMaterial( {color: 0x6F3E26} );
const desk = new THREE.Mesh( deskgeometry , deskmaterial );
scene.add( desk);

const desklegsgeometry = new THREE.CylinderGeometry( 1, 2, 9, 32 );
const desklegsmaterial = new THREE.MeshBasicMaterial( {color: 0x6F3E26} );
const desklegs = new THREE.Mesh( desklegsgeometry, desklegsmaterial );
scene.add(desklegs );

const desklegs2geometry = new THREE.CylinderGeometry( 1 ,1.5, 9, 32 );
const desklegs2material = new THREE.MeshBasicMaterial( {color: 0x6F3E26} );
const desklegs2 = new THREE.Mesh( desklegs2geometry, desklegs2material );
scene.add(desklegs2 );

//Computer
const screengeometry = new THREE.BoxGeometry( 6, 6, 1 );
const screenmaterial = new THREE.MeshBasicMaterial( {color: 0x332879} );
const view = new THREE.Mesh( screengeometry , screenmaterial );
scene.add( view);

const screen2geometry = new THREE.BoxGeometry( 5, 5, 1 );
const screen2material = new THREE.MeshBasicMaterial( {color: 0x1C1B21} );
const view2 = new THREE.Mesh( screen2geometry , screen2material );
scene.add( view2);

const CPUgeometry = new THREE.BoxGeometry( 4, 8, 1 );
const CPUmaterial = new THREE.MeshBasicMaterial( {color: 0x332879} );
const CPU = new THREE.Mesh( CPUgeometry , CPUmaterial );
scene.add( CPU);

const CPUboxgeometry = new THREE.BoxGeometry( 3, 4, 1 );
const CPUboxmaterial = new THREE.MeshBasicMaterial( {color: 0x4F3F9E} );
const CPUbox = new THREE.Mesh( CPUboxgeometry , CPUboxmaterial );
scene.add( CPUbox);

const CPUbox2geometry = new THREE.BoxGeometry( 3, 2.5, 1 );
const CPUbox2material = new THREE.MeshBasicMaterial( {color: 0x4F3F9E} );
const CPUbox2= new THREE.Mesh( CPUbox2geometry , CPUbox2material );
scene.add( CPUbox2);

const buttongeometry = new THREE.CircleGeometry( 1, 32 );
const buttonmaterial = new THREE.MeshBasicMaterial( { color: 0x706C6C } );
const button = new THREE.Mesh( buttongeometry, buttonmaterial );
scene.add( button )

//Legends of Arkain Books
const bookgeometry = new THREE.BoxGeometry( 6, 1, 1 );
const bookmaterial = new THREE.MeshBasicMaterial( {color: 0xA9BCC6} );
const book= new THREE.Mesh( bookgeometry , bookmaterial );
scene.add( book);

const book2geometry = new THREE.BoxGeometry( 5, 1, 1 );
const book2material = new THREE.MeshBasicMaterial( {color: 0x09C352} );
const book2= new THREE.Mesh( book2geometry , book2material );
scene.add( book2);

const book3geometry = new THREE.BoxGeometry( 4, 1, 1 );
const book3material = new THREE.MeshBasicMaterial( {color: 0x6B2F97} );
const book3= new THREE.Mesh( book3geometry , book3material );
scene.add( book3);



camera.position.z= 35;

function animate() {
	requestAnimationFrame( animate );
    
    //floor
    floor.position.x=0;
    floor.position.y=-20;
    floor.position.z=0;

    //wall
    wall.position.x=0;
    wall.position.y=16;
    wall.position.z=1;


    //Window
    roomwindow.position.x=0;
    roomwindow.position.y=15;
    roomwindow.position.z=2;

    roomwindow2.position.x=0;
    roomwindow2.position.y=8;
    roomwindow2.position.z=2;

    //Curtain
    curtainbar.position.x=0
    curtainbar.position.y=22;
    curtainbar.position.z=3;

    curtainball.position.x=-18;
    curtainball.position.y=22;
    curtainball.position.z=3;

    curtainball2.position.x=18;
    curtainball2.position.y=22;
    curtainball2.position.z=3;

    curtain.position.x=13;
    curtain.position.y=14;
    curtain.position.z=2;

    curtain2.position.x=-13;
    curtain2.position.y=14;
    curtain2.position.z=2;

    //Desk
    desk.position.x=-30;
    desk.position.y=8;
    desk.position.z=3;

    desklegs.position.x=-18.4;
    desklegs.position.y=3;
    desklegs.position.z=3;

    desklegs2.position.x=-41.5;
    desklegs2.position.y=3;
    desklegs2.position.z=3;


    //Computer
    view.position.x=-30;
    view.position.y=11.5;
    view.position.z=3;

    view2.position.x=-30;
    view2.position.y=11.5;
    view2.position.z=3;

    CPU.position.x=-36.5;
    CPU.position.y=12.5;
    CPU.position.z=3;

    CPUbox.position.x=-36.5;
    CPUbox.position.y=11;
    CPUbox.position.z=3;

    CPUbox2.position.x=-36.5;
    CPUbox2.position.y=15;
    CPUbox2.position.z=3;

    button.position.x=-36.5;
    button.position.y=14.5;
    button.position.z=4;

    //Legends of Arkain Books
    book.position.x=-22;
    book.position.y=9;
    book.position.z=3;

    book2.position.x=-22;
    book2.position.y=10;
    book2.position.z=3;

    book3.position.x=-22;
    book3.position.y=11;
    book3.position.z=3;

    //BED
    bed.position.x=30;
    bed.position.y=3.5;
    bed.position.z=3;

    //Pillow
    pillow.position.x=43;
    pillow.position.y=9;
    pillow.position.z=3;




   

	renderer.render( scene, camera );
}
animate();
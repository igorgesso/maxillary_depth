Exams.ExamCanvas = class {
  constructor(){
    this.$canvas = $("[data-canvas='canvas']");
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
    this.renderer = new THREE.WebGLRenderer();
    this.bindEvents();
  } 
  
  bindEvents(){
    this.camera.fieldOfView = 45;
    this.camera.aspectRatio = window.innerWidth/window.innerHeight;
    this.camera.near = 1;
    this.camera.far = 10000;
    this.camera.position.set( 0, 0, 2000 );
    this.camera.lookAt( 0, 0, 0 );
    this.renderer = {canvas: this.$canvas, antialias: true};
    // this.renderer.setSize( 500, 500 );
    //this.renderCanvas();
  }



//  fieldOfView = 45,
//       aspectRatio = window.innerWidth/window.innerHeight,
//       near = 1,
//       far = 10000;

  //camera = new THREE.PerspectiveCamera( fieldOfView, aspectRatio, near, far );
  //camera.position.set( 0, 0, 2000 );
  //camera.lookAt( 0, 0, 0 );

  // const light = new THREE.DirectionalLight( 0xffffff );
  // light.position.set( 1, 0, 1 ).normalize();
  // scene.add(light);

  // let cubeWidth = 150,
  //     cubeHeight = 150,
  //     cubeDepth = 150;

  // const cubeGeometry = new THREE.BoxGeometry( cubeWidth, cubeHeight, cubeDepth );
  // const cubeMaterial = new THREE.MeshBasicMaterial( {color: 'red'} );

  // const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

  // scene.add(cube);
  // var material1 = new THREE.LineBasicMaterial( { color: 'red' } );

  // var geometry1 = new THREE.Geometry();
  // geometry1.vertices.push(new THREE.Vector3( 632.698, 292.369, 0) );
  // geometry1.vertices.push(new THREE.Vector3( 626.272, 563.035, 0) );

  // var line1 = new THREE.Line( geometry1, material1 );

  // var material2 = new THREE.LineBasicMaterial( { color: 'blue' } );

  // var geometry2 = new THREE.Geometry();
  // geometry2.vertices.push(new THREE.Vector3( 163.245, 417.157, 0) );
  // geometry2.vertices.push(new THREE.Vector3( 567.222+100, 415.854, 0) );

  // var line2 = new THREE.Line( geometry2, material2 );

  // scene.add( line1, line2 );

  // var starsGeometry = new THREE.Geometry();


  // var star = new THREE.Vector3(163.245, 417.157, 0);

  // starsGeometry.vertices.push( star );

  // var starsMaterial = new THREE.PointsMaterial( { color: 'yellow', size: 10 } );

  // var starField = new THREE.Points( starsGeometry, starsMaterial );

  // scene.add( starField );

 //myCanvas = document.getElementById('myCanvas');

  
  // renderer.setSize( 500, 500 );



  // renderCanvas() {

  //   this.renderer.render( this.scene, this.camera );
  // };

}
Exams.ExamCanvas = class {
  constructor(exams){
    this.exams = exams;
    this.$canvas = $("[data-exam-canvas]");
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
    this.renderer = new THREE.WebGLRenderer({ antialias: true});
    this.group    = new THREE.Group();
    this.bindEvents();
  } 
  
  bindEvents(){
    this.configCamera();
    this.scene.background = new THREE.Color(0xededed);
    //this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    console.log(this.renderer);
    // this.renderer.setSize( 700,500 );
    this.createLines(this.exams);
    this.createPoint(this.exams.point_a);
    this.createPoint(this.exams.point_n);
    this.createPoint(this.exams.point_po);
    this.createPoint(this.exams.point_or);
    this.createScene();
    this.$canvas.append(this.renderer.domElement);
    this.initOrbitControls();
    this.animate();
  }

  configCamera() {
    this.camera.fieldOfView = 45;
    this.camera.aspectRatio = window.innerWidth / window.innerHeight;
    this.camera.near = 0.1;
    this.camera.far = 10000;
    this.camera.position.set( 360, 450, 700 );
    //this.camera.lookAt( 0, 0, 0 );
  }

  createScene() {
    this.scene.add( this.group );
  };

  // const light = new THREE.DirectionalLight( 0xffffff );
  // light.position.set( 1, 0, 1 ).normalize();
  // scene.add(light);

  createLines(exam) {
    const material = new THREE.LineBasicMaterial({color: 'blue'});

    const points_n_a = new THREE.Geometry();
    points_n_a.vertices.push(new THREE.Vector3( exam.point_n.x, exam.point_n.y, 0) );
    points_n_a.vertices.push(new THREE.Vector3( exam.point_a.x, exam.point_a.y, 0) );
    const line_n_a = new THREE.Line(points_n_a, material);
    this.group.add(line_n_a);

    const points_po_or = new THREE.Geometry();
    points_po_or.vertices.push(new THREE.Vector3( parseFloat(exam.point_po.x)- 50, exam.point_po.y, 0) );
    points_po_or.vertices.push(new THREE.Vector3( parseFloat(exam.point_or.x) + 100, exam.point_or.y, 0) );
    const line_po_or = new THREE.Line(points_po_or, material);
    this.group.add(line_po_or);
  }

  createPoint(point) {
    const starsMaterial = new THREE.PointsMaterial( { color: 'red', size: 20 } );
    const starsGeometry = new THREE.Geometry();
    starsGeometry.vertices.push( new THREE.Vector3(point.x, point.y, 0));
    const starField = new THREE.Points( starsGeometry, starsMaterial );
    this.group.add(starField);
  }

  initOrbitControls() {
    this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
    this.controls.target.set( 360, 450, 0 );
    this.controls.update();
  }

  animate() {
  	requestAnimationFrame( this.animate.bind(this) );
    this.controls.update();
    console.log(this.controls);
    this.renderCanvas();
  }

  renderCanvas() {
    this.renderer.render( this.scene, this.camera );
  };

}
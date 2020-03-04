import React, { Component } from 'react';
import * as THREE from 'three';

// Впихнуто всё в App просто как пример
class App extends Component {
  
  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 35, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    const warehouseGeometry = new THREE.BoxGeometry( 1, 1, 1 );
    const warehouseMaterial= new THREE.MeshBasicMaterial( { color: 'white', transparent: true, wireframe: true, opacity: 1 } );
    const warehouse = new THREE.Mesh( warehouseGeometry, warehouseMaterial );

    const area1Geometry = new THREE.BoxGeometry( 0.5, 0.3, 0.15 );
    const area1material= new THREE.MeshBasicMaterial( { color: 'gray', transparent: true, opacity: 1 } );
    const area1 = new THREE.Mesh( area1Geometry, area1material );
    area1.position.x = -0.35;
    area1.position.y = -0.2;

    const area2Geometry = new THREE.BoxGeometry( 0.5, 0.3, 0.15 );
    const area2material= new THREE.MeshBasicMaterial( { color: 'gray', transparent: true, opacity: 1 } );
    const area2 = new THREE.Mesh( area2Geometry, area2material );
    area2.position.x = -0.35;
    area2.position.y = 0.2;

    const area3Geometry = new THREE.BoxGeometry( 0.5, 0.3, 0.15 );
    const area3material= new THREE.MeshBasicMaterial( { color: 'gray', transparent: true, opacity: 1 } );
    const area3 = new THREE.Mesh( area3Geometry, area3material );
    area3.position.x = 0.38;
    area3.position.y = -0.40;
    
    scene.add( warehouse );
    scene.add( area1 );
    scene.add( area2 );
    scene.add( area3 );
    
    camera.position.z = 5;

    const setPositioning = function (obj, x, y) {
      obj.rotation.x = x;
      obj.rotation.y = y;
    };
    
    setPositioning(warehouse, 0.45, 1.1);
    setPositioning(area1, 0.45, 1.1);
    setPositioning(area2, 0.45, 1.1);
    setPositioning(area3, 0.45, 1.1);

    renderer.render( scene, camera );
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default App;

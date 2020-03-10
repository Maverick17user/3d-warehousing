import React, { Component } from 'react';
import * as THREE from 'three';
import { objectRotation } from '../../services/camera';

class Warehouse extends Component {
  // Warehouse creator
  createWarehouse = () => {
    const warehouseGeometry = new THREE.BoxGeometry( 1, 1, 1 );
    const warehouseMaterial= new THREE.MeshBasicMaterial( { color: 'white', transparent: true, wireframe: true, opacity: 0.2 } );
    const warehouse = new THREE.Mesh( warehouseGeometry, warehouseMaterial );

    return warehouse;
  }

  // Area creator
  createAreaMesh = (x, y) => {
    const areaGeometry = new THREE.BoxGeometry( 0.5, 0.3, 0.15 );
    const areamaterial= new THREE.MeshBasicMaterial( { color: 'lightgray', transparent: true, opacity: 0.3 } );
    const area = new THREE.Mesh( areaGeometry, areamaterial );

    area.position.x = x;
    area.position.y = y;

    return area;
  };

  // Rotate mash
  setRotationXY = (obj, x, y) => {
    obj.rotation.x = x;
    obj.rotation.y = y;
  };

  componentDidMount() {
    // Create scene and camera
    // *scene & camera & renderer - надо обговорить, где это оставить 
    // *и как это экспортить и переиспользовать в разных view
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 35, window.innerWidth/window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    camera.position.z = 5;
    
    // Create warehouse mesh
    const warehouse = this.createWarehouse(); 

    // Create area meshes
    const area1 = this.createAreaMesh(-0.35, -0.2);
    const area2 = this.createAreaMesh(-0.35, 0.15);
    const area3 = this.createAreaMesh(0.38, -0.40); 
 
  
    
    // Add meshes to the scene
    scene.add( warehouse );
    scene.add( area1 );
    scene.add( area2 );
    scene.add( area3 );
    
    this.setRotationXY(warehouse, 0.45, 1.1);
    this.setRotationXY(area1, 0.45, 1.1);
    this.setRotationXY(area2, 0.45, 1.1);
    this.setRotationXY(area3, 0.45, 1.1);

    const rotateWarehouse = objectRotation(camera, renderer.domElement);

    function animate() {
      requestAnimationFrame( animate );
      rotateWarehouse.update();
      renderer.render(scene, camera);
    }
    animate();  

  }

  render() {    
    return [];
  }
}

export default Warehouse;

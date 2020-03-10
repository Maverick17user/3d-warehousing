import React, { Component } from 'react';
import * as THREE from 'three';
import { objectRotation } from '../services/camera';


import Area from './view-2/Area';

// *Впихнуто всё в App просто как пример
// *Создай локальный компонент Index.jsx в папке "view1"
class App extends Component {
  
  x = 1;
  y = 1;
  z = 1;
  
  // Warehouse creator
  createWarehouse = () => {
    const warehouseGeometry = new THREE.BoxGeometry( this.x, this.y, this.z );
    const warehouseMaterial= new THREE.LineBasicMaterial( { color: 'white', transparent: true,  opacity: 0.2 } );
    const edges = new THREE.EdgesGeometry( warehouseGeometry );
    const warehouse = new THREE.LineSegments( edges, warehouseMaterial );
    return warehouse;
  }

  // Area creator
  createAreaMesh = (x, y, z) => {
    const areaGeometry = new THREE.BoxGeometry( this.x, 0.3, 0.15 );
    const areamaterial= new THREE.MeshBasicMaterial( { color: 'lightgray', transparent: true, opacity: 0.3 } );
    const area = new THREE.Mesh( areaGeometry, areamaterial );

    area.position.x = x;
    area.position.y = y;
    area.position.z = z; 

    return area;
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
    const area1 = this.createAreaMesh(this.x - 1.0, this.y - 1.35, this.z - 0.58);
    const area2 = this.createAreaMesh(this.x - 1.0, this.y - 1.0, this.z - 0.58);
    const area3 = this.createAreaMesh(this.x - 1.0, this.y - 1.35, this.z - 1.42); 
    
    // Add meshes to the scene
    scene.add( warehouse );
    scene.add( area1 );
    scene.add( area2 );
    scene.add( area3 );
    
    const rotateWarehouse = objectRotation(camera, renderer.domElement);

    function animate() {
      requestAnimationFrame( animate );
      rotateWarehouse.update();
      renderer.render(scene, camera);
    }
    animate();  
  }

  render() {    
    return (
      <div>
        {/* <Area /> */}
      </div>
    );
  }
}

export default App;

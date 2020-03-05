import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class Area extends Component {
  // Area creator
  createAreaMesh = (x, y, z) => {
    const areaGeometry = new THREE.BoxGeometry( 2, 1.5, 0.20 );
    const areamaterial= new THREE.MeshBasicMaterial( { color: 'lightgray', transparent: true, opacity: 0.3 } );
    const area = new THREE.Mesh( areaGeometry, areamaterial );

    area.position.set(x, y, z);

    return area;
  }

  // Warehouse creator
  createWarehouse = () => {
    const warehouseGeometry = new THREE.BoxBufferGeometry( 2, 1.5, 1.5 );
    const edges = new THREE.EdgesGeometry( warehouseGeometry );
    const warehouseMaterial= new THREE.LineBasicMaterial( { color: 'white', transparent: true, opacity: 0.3 } );
    const warehouse = new THREE.LineSegments( edges, warehouseMaterial );

    warehouse.position.set(0, 0, 1.5);

    return warehouse;
  }

  // createPlane = (x, y, z) => {
  //   const planeGeometry = new THREE.PlaneGeometry(2, 0.2, 3, 1);
  //   const planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide});
  //   const plane = new THREE.Mesh(planeGeometry, planeMaterial);

  //   plane.position.set(x, y, z);
  //   plane.rotation.x = 1.56;

  //   return plane;
  // }

  createBox = (x, y, z) => {
    const areaGeometry = new THREE.BoxGeometry( 2, 0.3, 0.07 );
    const areamaterial= new THREE.MeshBasicMaterial( { color: 'white', transparent: true, opacity: 0.5, } );
    const area = new THREE.Mesh( areaGeometry, areamaterial );

    area.rotation.x = 1.56;
    area.position.set(x, y, z);

    return area;
  }

  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera.position.set(0, 0, 7);

    // Create warehouse mesh
    const warehouse = this.createWarehouse();

    // Create area meshes
    const areaMesh = this.createAreaMesh(0, 0, 0.85);

    // Create plane for shelf
    const plane = this.createBox(0, 0, 1.1);
    const plane2 = this.createBox(0, -0.712, 1.1);
    const plane3 = this.createBox(0, 0.712, 1.1);


    // Add meshes to the scene
    scene.add(warehouse, areaMesh, plane, plane2, plane3);

    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
      requestAnimationFrame( animate );
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  }



  render() {
    return (
      <div></div>
    );
  }

}

export default Area;

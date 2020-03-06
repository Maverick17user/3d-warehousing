import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class Area extends Component {
  // Area creator
  createAreaMesh = (x, y, z) => {
    const areaGeometry = new THREE.BoxGeometry( 3, 2, 0.20 );
    const areamaterial= new THREE.MeshBasicMaterial( { color: 'lightgray', transparent: true, opacity: 0.3 } );
    const area = new THREE.Mesh( areaGeometry, areamaterial );

    area.position.set(x, y, z);

    return area;
  }

  // Warehouse creator
  createWarehouse = () => {
    const warehouseGeometry = new THREE.BoxBufferGeometry( 3, 2, 1.5 );
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

  createShelves = (x, y, z, rotation) => {
    const shelvesGeometry = new THREE.BoxGeometry( 3, 0.3, 0.07 );
    const shelvesMaterial= new THREE.MeshBasicMaterial( { color: 'white', transparent: true, opacity: 0.5, } );
    const shelves = new THREE.Mesh( shelvesGeometry, shelvesMaterial );

    shelves.rotation.x = rotation;
    shelves.position.set(x, y, z);

    return shelves;
  }

  createShelfEdges = (x, y, z, rotation) => {
    const shelfEdgeGeometry = new THREE.BoxGeometry( 2, 0.5, 0.1 );
    const shelfEdgeMaterial= new THREE.MeshBasicMaterial( { color: 'lightgray', transparent: true, opacity: 0.2, } );
    const shelfEdge = new THREE.Mesh( shelfEdgeGeometry, shelfEdgeMaterial );

    shelfEdge.rotation.x = rotation;
    shelfEdge.rotation.y = rotation;
    shelfEdge.position.set(x, y, z);

    return shelfEdge;
  }

  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera.position.set(0, 0, 7);

    // Create warehouse mesh
    // const warehouse = this.createWarehouse();

    // Create area meshes
    const areaMesh = this.createAreaMesh(0, 0, 0.85);

    // Create plane for shelf
    const shelf = this.createShelves(0, 0.97, 1.1, 1.57);
    const shelf2 = this.createShelves(0, 0.4, 1.1, 1.57);
    const shelf3 = this.createShelves(0, -0.3, 1.1, 1.57);
    const shelf4 = this.createShelves(0, -0.97, 1.1, 1.57);

    // Create shelf edges
    const rightShelfEdge = this.createShelfEdges(1.55, 0, 1, 1.57);
    const leftShelfEdge = this.createShelfEdges(-1.55, 0, 1, 1.57);

    // Add meshes to the scene
    scene.add(areaMesh);
    scene.add(shelf, shelf2, shelf3, shelf4);
    scene.add(rightShelfEdge, leftShelfEdge);

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

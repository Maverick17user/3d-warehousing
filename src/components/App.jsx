import React, { Component } from 'react';
import * as THREE from 'three';

class App extends Component {
  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 35, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 'whitesmoke' } );
    const cube = new THREE.Mesh( geometry, material );
    
    scene.add( cube );
    camera.position.z = 5;

    const animate = function () {
      // requestAnimationFrame( animate );
      cube.rotation.x = 0.45;
      cube.rotation.y = 1.1;
      renderer.render( scene, camera );
    };

    animate();
  }

  render() {
    return (
      <div />
    );
  }
}

export default App;

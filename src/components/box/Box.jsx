import React, { Component } from 'react';
import * as THREE from 'three';
import PropTypes from 'prop-types';
import { objectRotation } from '../../services/camera';

class Box extends Component {
  createBox = (x, y, z, segments) => {
    const boxGeomery = new THREE.BoxGeometry( x, y, z, segments);
    const boxTexture = new THREE.TextureLoader().load('/assets/box-texture.jpg');
    const boxMaterial = new THREE.MeshBasicMaterial({map: boxTexture});
    const box = new THREE.Mesh(boxGeomery, boxMaterial);

    return box;
  }

  componentDidMount() {
    const { x, y, z, segments } = this.props;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 7);
    
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create box
    const box = this.createBox(x, y, z, segments);
    scene.add(box);

    const controls = objectRotation(camera, renderer.domElement);

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

Box.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  segments: PropTypes.number,
};

export default Box;

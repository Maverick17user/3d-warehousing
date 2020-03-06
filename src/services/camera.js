import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

export const objectRotation = (camera, renderer) => {
  const rotateControls = new OrbitControls(camera, renderer);
  return rotateControls;
};

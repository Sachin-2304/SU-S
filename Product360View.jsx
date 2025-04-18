import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ViewerContainer = styled.div`
  width: 100%;
  height: 500px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  overflow: hidden;
`;

const Product360View = ({ modelUrl }) => {
  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    
    // Scene setup
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(rendererRef.current.domElement);

    // Controls
    const controls = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
    controls.enableDamping = true;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    
    animate();

    return () => {
      container.removeChild(rendererRef.current.domElement);
    };
  }, []);

  return <ViewerContainer ref={containerRef} />;
};

export default Product360View;

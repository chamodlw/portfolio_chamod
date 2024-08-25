// src/ThreeScene.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

const Dots = () => {
  const dotsRef = useRef();

  useEffect(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 100; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(5));
      vertices.push(THREE.MathUtils.randFloatSpread(5));
      vertices.push(THREE.MathUtils.randFloatSpread(5));
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    dotsRef.current.geometry = geometry;
  }, []);

  // Blinking and rotating effect
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const scale = (Math.sin(time * 2) + 1.5) / 2; // Blinking effect
    dotsRef.current.material.size = scale * 0.05; // Adjust size scaling as needed
    
    // Rotating effect
    dotsRef.current.rotation.y += 0.01; // Adjust rotation speed as needed
    dotsRef.current.rotation.x += 0.01; // Optional: rotate around the x-axis
  });

  return (
    <points ref={dotsRef}>
      <bufferGeometry />
      <pointsMaterial color="#0F8CEC" size={0.05} />
    </points>
  );
};

const ThreeScene = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Dots />
    </Canvas>
  );
};

export default ThreeScene;

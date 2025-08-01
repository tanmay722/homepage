import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";
import earthImg from "./earthb.jpg";

// Earth component
const Earth = () => {
  const [earthTexture] = useTexture([earthImg]);
  const earthRef = useRef();

  // 🔧 Clipping plane to hide bottom 25% of the sphere
  const clipPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0.25);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={earthTexture}
        clippingPlanes={[clipPlane]}
        clipShadows={true}
      />
    </mesh>
  );
};

// Enables local clipping in WebGL
const ClippingSetup = () => {
  const { gl } = useThree();
  useEffect(() => {
    gl.localClippingEnabled = true;
  }, [gl]);
  return null;
};

// Camera look-at logic
const CameraController = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(0, 0, 0); // Look at the Earth's center (equator)
  }, [camera]);
  return null;
};

// Main 3D Earth scene
const Earth3D = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0.5, 4], fov: 45 }}>
        <CameraController />
        <ClippingSetup />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Stars radius={100} depth={50} count={2000} factor={4} fade />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Earth3D;

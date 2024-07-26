// File: src/components/MotionBackground.jsx

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import * as THREE from "three";

const MotionBackground = (props) => {
  const ref = useRef(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} stride={3} positions={new Float32Array(sphere)} frustumCulled {...props}>
        <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
};

const MotionCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <React.Suspense fallback={null}>
        <MotionBackground />
      </React.Suspense>
    </Canvas>
  </div>
);

export default MotionCanvas;

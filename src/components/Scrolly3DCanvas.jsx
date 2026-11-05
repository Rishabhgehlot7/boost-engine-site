import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// Procedural 3D Phone with Thaaro Hisab UI Screen + Dynamic Morphing Core
const MorphingModel = ({ progress }) => {
  const groupRef = useRef();
  const phoneRef = useRef();
  const coreRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Rotate assembly in 3D based on scroll progress and time
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      progress * Math.PI * 2.5 + t * 0.15,
      0.08
    );
    groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.15 + (progress - 0.5) * 0.4;

    // Morph transition: Stage 0-0.5: Exploded 3D Core -> Stage 0.5-1.0: Assembled 3D Device
    if (coreRef.current && phoneRef.current) {
      // Scale core down as user scrolls towards end
      const coreScale = Math.max(0.1, 1 - progress * 1.2);
      coreRef.current.scale.set(coreScale, coreScale, coreScale);

      // Scale phone up as progress advances
      const phoneScale = Math.min(1.2, Math.max(0.01, (progress - 0.25) * 1.6));
      phoneRef.current.scale.set(phoneScale, phoneScale, phoneScale);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 3D Exploded Engine Nodes (Early Stages) */}
      <group ref={coreRef}>
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const dist = 1.6 + (1 - progress) * 0.8;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * dist, Math.sin(angle) * dist, (i % 3 - 1) * 0.6]}
            >
              <octahedronGeometry args={[0.2, 0]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#00f0ff" : "#a855f7"}
                emissive={i % 2 === 0 ? "#00f0ff" : "#a855f7"}
                emissiveIntensity={1.8}
                wireframe
              />
            </mesh>
          );
        })}
        {/* Central Engine Turbine */}
        <mesh>
          <torusKnotGeometry args={[0.7, 0.2, 100, 16]} />
          <meshStandardMaterial
            color="#00f0ff"
            metalness={0.9}
            roughness={0.1}
            emissive="#003344"
          />
        </mesh>
      </group>

      {/* 3D Smartphone Device Mockup (Final Delivery / Thaaro Hisab Showcase) */}
      <group ref={phoneRef} scale={[0.01, 0.01, 0.01]}>
        {/* Phone Body */}
        <RoundedBox args={[1.8, 3.4, 0.18]} radius={0.12} smoothness={4}>
          <meshStandardMaterial color="#0b0f19" metalness={0.8} roughness={0.2} />
        </RoundedBox>

        {/* Screen Bezel / Border Glow */}
        <RoundedBox args={[1.68, 3.28, 0.19]} radius={0.08} smoothness={4} position={[0, 0, 0.01]}>
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.3}
            wireframe
          />
        </RoundedBox>

        {/* Dynamic Display / App Interface */}
        <mesh position={[0, 0, 0.1]}>
          <planeGeometry args={[1.62, 3.2]} />
          <meshBasicMaterial color="#030712" />
        </mesh>

        {/* Floating App Card Elements */}
        <mesh position={[0, 0.8, 0.12]}>
          <planeGeometry args={[1.35, 0.7]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.6} />
        </mesh>

        <mesh position={[0, -0.1, 0.12]}>
          <planeGeometry args={[1.35, 0.7]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.6} />
        </mesh>

        <mesh position={[0, -1.0, 0.12]}>
          <planeGeometry args={[1.35, 0.7]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.6} />
        </mesh>
      </group>
    </group>
  );
};

export const Scrolly3DCanvas = ({ progress }) => {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] relative pointer-events-auto cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={2} color="#00f0ff" />
        <directionalLight position={[-5, -5, -5]} intensity={1.5} color="#a855f7" />
        <pointLight position={[0, 0, 3]} intensity={2.5} color="#00f0ff" />

        <MorphingModel progress={progress} />
      </Canvas>
    </div>
  );
};


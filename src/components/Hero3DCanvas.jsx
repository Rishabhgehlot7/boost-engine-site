import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Ring } from '@react-three/drei';
import * as THREE from 'three';

// Inner glowing hyper-reactor core
const CoreReactor = () => {
  const meshRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.mouse.x * 0.8;
    const mouseY = state.mouse.y * 0.8;

    // React to cursor with smooth lerp
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouseY + t * 0.3, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouseX + t * 0.4, 0.05);

    // Gyroscopic rings spinning at different axis
    ring1Ref.current.rotation.x = t * 0.6;
    ring1Ref.current.rotation.y = t * 0.4;

    ring2Ref.current.rotation.y = -t * 0.5;
    ring2Ref.current.rotation.z = t * 0.3;

    ring3Ref.current.rotation.z = -t * 0.7;
    ring3Ref.current.rotation.x = t * 0.5;
  });

  return (
    <group ref={meshRef}>
      {/* Central Pulsing Plasma Core */}
      <Sphere args={[1.1, 64, 64]}>
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#005577"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
          distort={0.4}
          speed={2.5}
          wireframe={false}
        />
      </Sphere>

      {/* Wireframe Hologram Aura */}
      <Sphere args={[1.25, 32, 32]}>
        <meshStandardMaterial
          color="#a855f7"
          wireframe
          transparent
          opacity={0.35}
        />
      </Sphere>

      {/* Orbiting Tech Ring 1 (Cyan) */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.7, 0.035, 16, 100]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbiting Tech Ring 2 (Purple) */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.0, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Outer Gyro Ring 3 (Emerald Green Accent) */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.3, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={1}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

// Orbiting 3D Particle Cloud
const FloatingDataNodes = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.1;
  });

  const nodes = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < 40; i++) {
      const angle = (i / 40) * Math.PI * 2;
      const radius = 2.8 + Math.random() * 1.5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 2.5;
      temp.push({ x, y, z, scale: 0.04 + Math.random() * 0.04 });
    }
    return temp;
  }, []);

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={[node.x, node.y, node.z]}>
          <boxGeometry args={[node.scale, node.scale, node.scale]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#00f0ff" : "#a855f7"}
            emissive={i % 2 === 0 ? "#00f0ff" : "#a855f7"}
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
};

export const Hero3DCanvas = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        className="w-full h-full"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f0ff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#a855f7" />
        <pointLight position={[0, 0, 2]} intensity={2} color="#00f0ff" />

        <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
          <CoreReactor />
          <FloatingDataNodes />
        </Float>
      </Canvas>
    </div>
  );
};


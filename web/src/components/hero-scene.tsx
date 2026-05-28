"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Dynamic camera rig that creates a deep parallax effect moving with the mouse
function CameraRig() {
  useFrame((state) => {
    // Aggressively move the camera based on pointer position for a 3D feel
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 2.5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 2.5, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

// A clean, tech-focused geometric lattice - very precise and architectural
function DataLattice() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  
  // Create an array of geometric nodes
  const nodes = useMemo(() => {
    const list = [];
    for (let i = 0; i < 24; i++) {
      const radius = 2.5 + Math.random() * 1.5;
      const angle = (i / 24) * Math.PI * 2;
      const h = (Math.random() - 0.5) * 4;
      list.push({
        position: [Math.cos(angle) * radius, h, Math.sin(angle) * radius] as [number, number, number],
        scale: 0.2 + Math.random() * 0.4,
        speed: 0.2 + Math.random() * 0.5
      });
    }
    return list;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.2;
      coreRef.current.rotation.y = t * 0.3;
    }
    
    // Aggressive, beautiful rotation and tracking with the mouse
    if (groupRef.current) {
      const mouseX = state.pointer.x;
      const mouseY = state.pointer.y;
      
      // Base continuous rotation
      const baseRotationY = t * 0.1;
      
      // Target rotations mapping strongly to mouse movement
      const targetRotX = -mouseY * (Math.PI / 3);
      const targetRotY = baseRotationY + mouseX * (Math.PI / 2);
      const targetRotZ = -mouseX * (Math.PI / 4);
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.05);
      
      // Target positions for secondary parallax layer
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouseX * 0.5, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouseY * 0.5, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Icosahedron core */}
      <Float speed={1.5} floatIntensity={0.5} rotationIntensity={0.5}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshPhysicalMaterial 
            color="#0f172a"
            emissive="#1e293b"
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
            wireframe={true}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Solid inner core */}
        <mesh>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>

      {/* Orbiting data nodes */}
      {nodes.map((node, i) => (
        <Float key={i} speed={node.speed} floatIntensity={2} rotationIntensity={1}>
          <mesh position={node.position} scale={node.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial 
              color="#2563eb"
              emissive="#1d4ed8"
              emissiveIntensity={0.4}
              transparent
              opacity={0.8}
              roughness={0}
              metalness={0.5}
            />
          </mesh>
        </Float>
      ))}

      {/* Connecting rings representing network topology */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.01, 16, 100]} />
        <meshBasicMaterial color="#94a3b8" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={1.5}>
        <torusGeometry args={[3, 0.01, 16, 100]} />
        <meshBasicMaterial color="#64748b" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="relative mx-auto w-full aspect-square max-w-[600px] lg:scale-110">
      {/* Container is completely transparent, integrating seamlessly into the page */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          {/* Switched to PerspectiveCamera for real depth feeling */}
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
          <CameraRig />
          
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 20, 10]} intensity={3} color="#ffffff" castShadow />
          <directionalLight position={[-10, -20, -10]} intensity={1.5} color="#3b82f6" />
          
          {/* Slightly scaling down to fit nicely without cutting out */}
          <group scale={0.7} position={[0, 0, 0]}>
            <DataLattice />
          </group>
          
          <Environment preset="city" />
          {/* Updated shadow for light background */}
          <ContactShadows position={[0, -3, 0]} opacity={0.3} scale={20} blur={2.5} far={10} color="#0f172a" />
        </Canvas>
      </div>

      {/* Modern, light-themed overlay matching the rest of the page */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none z-10">
        <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <p className="text-[10px] font-mono text-blue-600 uppercase tracking-widest mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Architecture
          </p>
          <p className="text-sm font-medium text-gray-900">Distributed Mesh</p>
        </div>
        
        <div className="flex gap-2 p-2 bg-white/90 backdrop-blur-md rounded-lg border border-gray-200 shadow-sm">
          <div className="h-2 w-2 rounded-sm bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          <div className="h-2 w-2 rounded-sm bg-gray-200" />
          <div className="h-2 w-2 rounded-sm bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

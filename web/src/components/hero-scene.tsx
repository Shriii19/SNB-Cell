"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Float, Sphere, Cylinder, Capsule } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// The Space Mascot Character
function SpaceMascot() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  
  // Cursor interaction for parallax and looking at mouse
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (groupRef.current) {
      // Subtle floating is handled by <Float>, here we just add parallax based on cursor
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      // Smoothly interpolate group rotation towards cursor
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY * 0.5, 0.05);
      
      // Add a slight breathing scale effect
      const breathe = 1 + Math.sin(t * 2) * 0.02;
      groupRef.current.scale.set(breathe, breathe, breathe);
    }

    if (headRef.current) {
      // Head tilts slightly more towards mouse
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.08);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.08);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={1.5}>
        <group position={[0, 0, 0]}>
          
          {/* Main Body (Spacesuit) */}
          <Capsule args={[0.8, 0.6, 4, 32]} position={[0, -0.4, 0]}>
            <meshPhysicalMaterial 
              color="#ffffff" 
              roughness={0.2} 
              metalness={0.1}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </Capsule>

          {/* Jetpack / Backpack */}
          <Capsule args={[0.4, 0.5, 4, 16]} position={[0, -0.2, -0.7]} rotation={[0.2, 0, 0]}>
            <meshPhysicalMaterial color="#e2e8f0" roughness={0.3} metalness={0.2} />
          </Capsule>
          {/* Jetpack Boosters (Glowing) */}
          <Cylinder args={[0.15, 0.15, 0.3, 16]} position={[-0.25, -0.7, -0.8]}>
            <meshStandardMaterial color="#3b82f6" emissive="#60a5fa" emissiveIntensity={2} />
          </Cylinder>
          <Cylinder args={[0.15, 0.15, 0.3, 16]} position={[0.25, -0.7, -0.8]}>
            <meshStandardMaterial color="#3b82f6" emissive="#60a5fa" emissiveIntensity={2} />
          </Cylinder>

          {/* Head Group */}
          <group ref={headRef} position={[0, 0.8, 0]}>
            {/* Helmet */}
            <Sphere args={[0.75, 32, 32]}>
              <meshPhysicalMaterial 
                color="#ffffff" 
                roughness={0.1} 
                metalness={0.1}
                clearcoat={1}
              />
            </Sphere>
            
            {/* Visor (Dark Glass/Glowing) */}
            <Capsule args={[0.45, 0.2, 4, 32]} position={[0, 0, 0.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
              <meshPhysicalMaterial 
                color="#0f172a" 
                roughness={0.1} 
                metalness={0.8}
                clearcoat={1}
                emissive="#1e293b"
                emissiveIntensity={0.5}
              />
            </Capsule>

            {/* Cute Glowing Eyes inside Visor */}
            <Sphere args={[0.08, 16, 16]} position={[-0.2, 0.05, 0.88]}>
              <meshBasicMaterial color="#60a5fa" />
            </Sphere>
            <Sphere args={[0.08, 16, 16]} position={[0.2, 0.05, 0.88]}>
              <meshBasicMaterial color="#60a5fa" />
            </Sphere>

            {/* Antenna */}
            <Cylinder args={[0.02, 0.02, 0.4]} position={[0, 0.8, 0]}>
              <meshStandardMaterial color="#94a3b8" />
            </Cylinder>
            <Sphere args={[0.1, 16, 16]} position={[0, 1.05, 0]}>
              <meshStandardMaterial color="#ef4444" emissive="#f87171" emissiveIntensity={1} />
            </Sphere>
          </group>

          {/* Floating Arms */}
          <Capsule args={[0.2, 0.4, 4, 16]} position={[-1.1, -0.2, 0]} rotation={[0, 0, -0.4]}>
            <meshPhysicalMaterial color="#ffffff" roughness={0.2} clearcoat={1} />
          </Capsule>
          <Capsule args={[0.2, 0.4, 4, 16]} position={[1.1, -0.2, 0]} rotation={[0, 0, 0.4]}>
            <meshPhysicalMaterial color="#ffffff" roughness={0.2} clearcoat={1} />
          </Capsule>
        </group>
      </Float>
    </group>
  );
}

// Sparkles / Stars in the background to fit the space theme
function SpaceDust() {
  const starsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      starsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={starsRef}>
      {Array.from({ length: 40 }).map((_, i) => (
        <Sphere 
          key={i} 
          args={[0.02 + Math.random() * 0.03, 8, 8]} 
          position={[
            (Math.random() - 0.5) * 15, 
            (Math.random() - 0.5) * 15, 
            (Math.random() - 0.5) * 10 - 2
          ]}
        >
          <meshBasicMaterial color="#93c5fd" transparent opacity={0.3 + Math.random() * 0.5} />
        </Sphere>
      ))}
    </group>
  );
}

export function HeroScene({ showHud = false }: { showHud?: boolean }) {
  return (
    <div className="relative mx-auto w-full aspect-square max-w-[600px] lg:scale-110 cursor-none">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <perspectiveCamera position={[0, 0, 8]} fov={35} />
          
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" castShadow />
          <directionalLight position={[-5, 5, -5]} intensity={1.5} color="#818cf8" />
          <pointLight position={[0, -2, 5]} intensity={1} color="#3b82f6" />
          
          <group position={[0, 0.5, 0]}>
            <SpaceMascot />
          </group>
          
          <SpaceDust />
          
          <Environment preset="city" />
          {/* Ground shadow for depth */}
          <ContactShadows position={[0, -2.8, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#1e1b4b" />
        </Canvas>
      </div>
    </div>
  );
}

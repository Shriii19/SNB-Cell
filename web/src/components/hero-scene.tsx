"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Simple deterministic random generator based on a seed
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

type EdgeNodeData = {
  position: [number, number, number];
  scale: number;
  phase: number;
  isHub: boolean;
};

type PacketLaneData = {
  radius: number;
  rotX: number;
  rotY: number;
  speed: number;
  phase: number;
  color: string;
  opacity: number;
};

// Global Edge Network Map visual
function GlobalEdgeNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate edge nodes distributed around the globe
  const nodes = useMemo(() => {
    const list: EdgeNodeData[] = [];
    const numNodes = 70;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    let seed = 42;
    
    for (let i = 0; i < numNodes; i++) {
        const y = 1 - (i / (numNodes - 1)) * 2;
        if (Math.abs(y) > 0.85) continue; // Keep poles cleaner
        
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = phi * i;
        
        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;
        const radius = 2.4; // Globe radius
        
        const isHub = seededRandom(seed++) > 0.85; // ~15% are larger data hubs
        
        list.push({
           position: [x * radius, y * radius, z * radius] as [number, number, number],
           scale: 0.04 + seededRandom(seed++) * 0.04,
           phase: seededRandom(seed++) * Math.PI * 2,
           isHub
        });
    }
    return list;
  }, []);

  const packetLanes = useMemo<PacketLaneData[]>(
    () => [
      {
        radius: 3.08,
        rotX: Math.PI / 2,
        rotY: 0.12,
        speed: 0.11,
        phase: 0.2,
        color: "#3b82f6",
        opacity: 0.22,
      },
      {
        radius: 3.32,
        rotX: Math.PI / 2.8,
        rotY: Math.PI / 4,
        speed: 0.095,
        phase: 1.65,
        color: "#60a5fa",
        opacity: 0.16,
      },
      {
        radius: 3.56,
        rotX: -Math.PI / 3.2,
        rotY: -Math.PI / 6,
        speed: 0.082,
        phase: 3.1,
        color: "#94a3b8",
        opacity: 0.12,
      },
    ],
    [],
  );

  // Controlled rotation and subtle parallax for a professional enterprise feel.
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (groupRef.current) {
      const mouseX = state.pointer.x;
      const mouseY = state.pointer.y;
      
      const targetRotX = THREE.MathUtils.degToRad(4) - mouseY * THREE.MathUtils.degToRad(5);
      const targetRotY = t * 0.08 + mouseX * THREE.MathUtils.degToRad(6);
      
      // Smooth interpolation for heavy mass feel
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.035);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.035);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Frosted Glass Core - Clean, premium white/silver layer that blends with light mode */}
      <mesh>
        <sphereGeometry args={[2.3, 64, 64]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          emissive="#f8fafc"
          emissiveIntensity={0.2}
          roughness={0.1}
          transmission={0.9}
          thickness={1.5}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Geodesic Mesh Overlay - Fine tech lattice matching the page's background grid */}
      <mesh scale={1.01}>
        <icosahedronGeometry args={[2.3, 5]} />
        <meshBasicMaterial 
           color="#94a3b8" 
           wireframe 
           transparent 
           opacity={0.15} 
        />
      </mesh>

      {/* Data Hubs / Edge Nodes */}
      {nodes.map((node, i) => (
         <EdgeNode key={i} data={node} />
      ))}

      {/* Packet lanes flowing around global routes */}
      {packetLanes.map((lane, i) => (
        <PacketLane key={i} lane={lane} />
      ))}
    </group>
  );
}

// Single node component with pulsing latency
  function EdgeNode({ data }: { data: EdgeNodeData }) {
   const matRef = useRef<THREE.MeshPhysicalMaterial>(null);
   const meshRef = useRef<THREE.Mesh>(null);
   
   useFrame((state) => {
      const t = state.clock.elapsedTime;
      // Irregular pulsing pattern imitating network traffic
      const pulse = (Math.sin(t * (data.isHub ? 2.4 : 1.8) + data.phase) + 1) / 2;
      
      if (matRef.current) {
        matRef.current.emissiveIntensity = data.isHub ? (0.8 + pulse * 0.9) : (0.25 + pulse * 0.45);
        matRef.current.opacity = data.isHub ? 0.9 : (0.65 + pulse * 0.2);
      }
      if (meshRef.current && data.isHub) {
        // Hubs pulsate gently to avoid flashy motion.
        meshRef.current.scale.setScalar(1 + pulse * 0.06);
      }
   });

   return (
      <mesh ref={meshRef} position={data.position}>
        <sphereGeometry args={[data.isHub ? data.scale * 1.8 : data.scale, 16, 16]} />
        <meshPhysicalMaterial 
          ref={matRef}
          color={data.isHub ? "#ffffff" : "#3b82f6"}
          emissive={data.isHub ? "#60a5fa" : "#2563eb"}
          roughness={0.05}
          transparent
        />
      </mesh>
   );
}

function PacketLane({ lane }: { lane: PacketLaneData }) {
  const packetARef = useRef<THREE.Mesh>(null);
  const packetBRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const thetaA = time * lane.speed + lane.phase;
    const thetaB = thetaA + Math.PI * 0.9;

    if (packetARef.current) {
      packetARef.current.position.set(
        Math.cos(thetaA) * lane.radius,
        Math.sin(thetaA) * lane.radius,
        0,
      );
    }

    if (packetBRef.current) {
      packetBRef.current.position.set(
        Math.cos(thetaB) * lane.radius,
        Math.sin(thetaB) * lane.radius,
        0,
      );
    }
  });

  return (
    <group rotation={[lane.rotX, lane.rotY, 0]}>
      <mesh>
        <torusGeometry args={[lane.radius, 0.0025, 12, 150]} />
        <meshBasicMaterial color={lane.color} transparent opacity={lane.opacity} />
      </mesh>

      <mesh ref={packetARef}>
        <sphereGeometry args={[0.045, 14, 14]} />
        <meshStandardMaterial color="#ffffff" emissive={lane.color} emissiveIntensity={1.2} />
      </mesh>

      <mesh ref={packetBRef}>
        <sphereGeometry args={[0.033, 12, 12]} />
        <meshStandardMaterial color={lane.color} emissive={lane.color} emissiveIntensity={0.85} />
      </mesh>
    </group>
  );
}

type HeroSceneProps = {
  showHud?: boolean;
};

export function HeroScene({ showHud = true }: HeroSceneProps) {
  return (
    <div className="relative mx-auto w-full aspect-square max-w-[600px] lg:scale-110">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={35} />
          
          <ambientLight intensity={2} color="#ffffff" />
          {/* Pristine, studio-style lighting matching the white layout */}
          <directionalLight position={[10, 20, 10]} intensity={2.5} color="#ffffff" castShadow />
          <directionalLight position={[-10, 0, -10]} intensity={1.5} color="#eff6ff" />
          
          <group scale={0.7} position={[0, 0, 0]}>
            <GlobalEdgeNetwork />
          </group>
          
          <Environment preset="studio" />
          {/* Softer contact shadow for the white background */}
          <ContactShadows position={[0, -2.5, 0]} opacity={0.15} scale={15} blur={3} far={10} color="#2563eb" />
        </Canvas>
      </div>

      {showHud && (
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none z-10">
          <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <p className="text-[10px] font-mono text-blue-600 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Global State
            </p>
            <p className="text-sm font-medium text-gray-900">Edge Network Topography</p>
          </div>
          
          <div className="flex gap-2 p-2 bg-white/90 backdrop-blur-md rounded-lg border border-gray-200 shadow-sm">
            <div className="h-2 w-2 rounded-sm bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <div className="h-2 w-2 rounded-sm bg-gray-300 animate-pulse" />
            <div className="h-2 w-2 rounded-sm border border-gray-300" />
          </div>
        </div>
      )}
    </div>
  );
}

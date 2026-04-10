import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const count = 4000;

const initialStarsPositions = (() => {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 40;      
    pos[i * 3 + 1] = (Math.random() - 0.5) * 120;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 30;  
  }
  return pos;
})();

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const { camera } = useThree();
  
  const positions = useMemo(() => initialStarsPositions, []);

  useEffect(() => {
    camera.position.set(0, 0, 25);
  }, [camera]);

  useFrame((state, delta) => {
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 1, delta * 0.8);

    if (ref.current) {
      const targetX = state.pointer.x * -0.05;
      const targetY = state.pointer.y * -0.05;
      ref.current.rotation.x += (targetY - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (targetX - ref.current.rotation.y) * 0.05;
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY;
        ref.current.position.y = scrollY * 0.005; 
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color='#ffffff'
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function StarsBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas eventSource={document.body} dpr={[1, 1.5]}>
        <Stars />
      </Canvas>
    </div>
  );
}


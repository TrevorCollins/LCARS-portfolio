import * as THREE from 'three';
import { Trail } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Electron({ radius = 4, speed = 3, ...props }) {
	const ref = useRef<THREE.Mesh>(null!);
	useFrame((state) => {
		const t = state.clock.getElapsedTime() * speed;
		ref.current.position.set((Math.sin(t) * radius * Math.atan(t)) / Math.PI / 1.5, Math.cos(t) * radius, Math.sin(t) * Math.PI);
	});
	return (
		<group {...props}>
			<Trail width={1} length={50} color={new THREE.Color(1, 2, 7)} stride={0} attenuation={(t) => t * t} decay={5}>
				<mesh ref={ref}>
					<sphereGeometry args={[0.15]} />
					<meshBasicMaterial color={[0, 2, 8]} toneMapped={false} />
				</mesh>
			</Trail>
		</group>
	);
}

export default Electron;

import * as THREE from 'three';
import { Trail } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { ElectronProps } from '@/app/_lib/types';

function Electron({ speed, radius, length, width, decay, rotation }: ElectronProps) {
	const ref = useRef<THREE.Mesh>(null!);
	useFrame((state) => {
		const t = state.clock.getElapsedTime() * speed;
		ref.current.position.set((Math.sin(t) * radius * Math.atan(t)) / Math.PI / 1.5, Math.cos(t) * radius, Math.sin(t) * Math.PI);
	});
	return (
		<group rotation={rotation}>
			<Trail width={width} length={length} color={new THREE.Color(1, 2, 7)} stride={0} attenuation={(t) => t * t} decay={decay}>
				<mesh ref={ref}>
					<sphereGeometry args={[0.25]} />
					<meshBasicMaterial color={[0, 2, 8]} toneMapped={false} />
				</mesh>
			</Trail>
		</group>
	);
}

export default Electron;

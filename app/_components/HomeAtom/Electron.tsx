import * as THREE from 'three';
import { Trail } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { electron } from '@/app/_lib/constants';
import { useIsMobile } from '@/app/_lib/utils';

function Electron({ rotation }: { rotation: [x: number, y: number, z: number] }) {
	let { radius, width, trailWidth, length, decay, speed } = electron;

	if (useIsMobile()) {
		radius = radius * 0.75;
		width = width / 2;
		trailWidth = trailWidth / 3;
		length = length * 2;
	}

	const ref = useRef<THREE.Mesh>(null!);
	useFrame((state) => {
		const t = state.clock.getElapsedTime() * speed;
		ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0);
	});
	return (
		<group rotation={rotation}>
			<Trail width={trailWidth} length={length} color={new THREE.Color(1, 2, 7)} stride={0} attenuation={(t) => t * t} decay={decay}>
				<mesh ref={ref}>
					<sphereGeometry args={[width]} />
					<meshBasicMaterial color={[0, 2, 8]} toneMapped={false} />
				</mesh>
			</Trail>
		</group>
	);
}

export default Electron;

'use client';

import { Canvas } from '@react-three/fiber';
import Stars from './Stars';

const Space = () => {
	return (
		<div className="fixed left-0 top-0 h-full w-full">
			<Canvas camera={{ position: [0, 0, -400], rotateX: Math.PI / 2, fov: 60 }}>
				<ambientLight intensity={1} />
				<fog attach="fog" args={['black', 300, 400]} />
				<Stars />
			</Canvas>
		</div>
	);
};

export default Space;

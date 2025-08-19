'use client';

import { Canvas } from '@react-three/fiber';
import AtomScene from './AtomScene';

export default function HomeAtom() {
	return (
		<section id="home" className="h-full w-full p-0">
			<Canvas className="rounded-xl" camera={{ position: [0, 0, 10] }}>
				<AtomScene />
			</Canvas>
		</section>
	);
}

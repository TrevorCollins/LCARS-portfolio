'use client';

import * as THREE from 'three';
import { Float, Sphere, Stars, Trail } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
// #5FDBFC
// rgb(95, 219, 252)

export default function Home() {
	// const { speed, radius, bloom } = useControls({
	// 	speed: { value: 4, min: 1, max: 10, step: 0.1 },
	// 	radius: { value: 5, min: 1, max: 10, step: 0.1 },
	// 	bloom: { value: 0.75, min: 0.1, max: 1, step: 0.01 },
	// });
	const { speed, radius, bloom } = {
		speed: 4,
		radius: 5,
		bloom: 0.75,
	};
	return (
		<section id="home" className="mx-auto aspect-square w-full p-0 lg:max-w-[50dvw]">
			<Canvas className="fixed overflow-visible rounded-xl" camera={{ position: [0, 0, 10] }}>
				<color attach="background" args={['black']} />
				<Atom radius={radius} speed={speed} />
				<Stars saturation={0} count={200} speed={0.5} />
				<EffectComposer>
					<Bloom mipmapBlur luminanceThreshold={1} radius={bloom} />
				</EffectComposer>
			</Canvas>
		</section>
	);
}

function Atom(props: any) {
	return (
		<group>
			<Electron radius={props.radius} rotation={[0, 0, 0]} speed={props.speed} />
			<Electron radius={props.radius} rotation={[0, 0, Math.PI / 3]} speed={props.speed * 1.2} />
			<Electron radius={props.radius} rotation={[0, 0, -Math.PI / 3]} speed={props.speed * 1.4} />
			<Float speed={5} floatIntensity={2.5}>
				<Sphere args={[0.25, 16, 16]}>
					<meshBasicMaterial color={[2, 5, 22]} toneMapped={false} />
				</Sphere>
			</Float>
		</group>
	);
}

function Electron({ radius = 4, speed = 3, ...props }) {
	const ref = useRef<THREE.Mesh>(null!);
	useFrame((state) => {
		const t = state.clock.getElapsedTime() * speed;
		ref.current.position.set((Math.sin(t) * radius * Math.atan(t)) / Math.PI / 1.5, Math.cos(t) * radius, Math.sin(t) * Math.PI);
	});
	return (
		<group {...props}>
			<Trail width={2} length={20} color={new THREE.Color(1, 2, 7)} stride={0} attenuation={(t) => t * t} decay={10}>
				<mesh ref={ref}>
					<sphereGeometry args={[0.15]} />
					<meshBasicMaterial color={[0, 2, 8]} toneMapped={false} />
				</mesh>
			</Trail>
		</group>
	);
}

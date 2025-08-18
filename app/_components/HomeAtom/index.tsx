import { Canvas } from '@react-three/fiber';

export default function HomeAtom({ children }: { children: React.ReactNode }) {
	const { speed, radius, bloom } = {
		speed: 4,
		radius: 5,
		bloom: 0.75,
	};
	return (
		<section id="home" className="h-full w-full p-0">
			<Canvas className="rounded-xl" camera={{ position: [0, 0, 10] }}>
				{children}
			</Canvas>
		</section>
	);
}

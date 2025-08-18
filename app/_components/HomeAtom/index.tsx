import { Canvas } from '@react-three/fiber';

export default function HomeAtom({ children }: { children: React.ReactNode }) {
	return (
		<section id="home" className="h-full w-full p-0">
			<Canvas className="rounded-xl" camera={{ position: [0, 0, 10] }}>
				{children}
			</Canvas>
		</section>
	);
}

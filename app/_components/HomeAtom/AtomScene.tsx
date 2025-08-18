import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Atom from './Atom';
import { Stars } from '@react-three/drei';
import { useIsMobile } from '@/app/_lib/utils';

function AtomScene() {
	const isMobile = useIsMobile();
	const { atom, bloom, electron, stars } = {
		atom: {
			floatSpeed: 5,
			floatIntensity: 1.5,
		},
		bloom: {
			radius: isMobile ? 0.65 : 0.75,
			luminance: 1,
		},
		electron: {
			speed: 4,
			radius: isMobile ? 3 : 5,
			width: isMobile ? 1 : 2,
			length: isMobile ? 50 : 30,
			decay: isMobile ? 5 : 10,
		},
		stars: {
			count: 200,
			speed: 0.5,
		},
	};
	return (
		<>
			<color attach="background" args={['black']} />
			<Atom atom={atom} electron={electron} />
			<Stars saturation={0} count={stars.count} speed={stars.speed} />
			<EffectComposer>
				<Bloom mipmapBlur luminanceThreshold={bloom.luminance} radius={bloom.radius} />
			</EffectComposer>
		</>
	);
}

export default AtomScene;

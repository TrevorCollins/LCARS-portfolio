import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Atom from './Atom';
import { Stars } from '@react-three/drei';

function AtomScene() {
	const { speed, radius, bloom } = {
		speed: 4,
		radius: 5,
		bloom: 0.75,
	};
	return (
		<>
			<color attach="background" args={['black']} />
			<Atom radius={radius} speed={speed} />
			<Stars saturation={0} count={200} speed={0.5} />
			<EffectComposer>
				<Bloom mipmapBlur luminanceThreshold={1} radius={bloom} />
			</EffectComposer>
		</>
	);
}

export default AtomScene;

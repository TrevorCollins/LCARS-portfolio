import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Atom from './Atom';
import { Float } from '@react-three/drei';
import { useIsMobile } from '@/app/_lib/utils';
import { atom, bloom } from '@/app/_lib/constants';

function AtomScene() {
	let { floatIntensity, floatSpeed, rotationIntensity } = atom;
	let { luminanceSmoothing, luminanceThreshold, radius, intensity } = bloom;

	if (useIsMobile()) {
		floatIntensity = floatIntensity / 2;
		radius = radius * 0.75;
	}

	return (
		<>
			<Float speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={rotationIntensity}>
				<Atom />
			</Float>
			<EffectComposer>
				<Bloom luminanceThreshold={luminanceThreshold} radius={radius} intensity={intensity} luminanceSmoothing={luminanceSmoothing} />
			</EffectComposer>
		</>
	);
}

export default AtomScene;

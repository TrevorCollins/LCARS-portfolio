import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Atom from './Atom';
import { useIsMobile } from '@/app/_lib/utils';
import { atom, bloom } from '@/app/_lib/constants';

function AtomScene() {
	let { luminanceSmoothing, luminanceThreshold, radius, intensity } = bloom;

	if (useIsMobile()) {
		radius = radius * 0.75;
	}

	return (
		<>
			<Atom />
			<EffectComposer>
				<Bloom luminanceThreshold={luminanceThreshold} radius={radius} intensity={intensity} luminanceSmoothing={luminanceSmoothing} />
			</EffectComposer>
		</>
	);
}

export default AtomScene;

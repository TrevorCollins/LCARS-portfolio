import { Float, Sphere } from '@react-three/drei';
import Electron from './Electron';
import { atom } from '@/app/_lib/constants';

function Atom() {
	let { floatIntensity, floatSpeed, rotationIntensity } = atom;
	return (
		<group>
			<Electron speedMultiplier={1} rotation={[0, 0, Math.PI / 2]} />
			<Electron speedMultiplier={1.1} rotation={[0, 0, Math.PI / 3 / 2]} />
			<Electron speedMultiplier={0.9} rotation={[0, 0, -Math.PI / 3 / 2]} />
			<Float speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={rotationIntensity}>
				<Sphere args={[0.2]}>
					<meshBasicMaterial color={[2, 5, 22]} toneMapped={false} />
				</Sphere>
			</Float>
		</group>
	);
}

export default Atom;

import { Float, Sphere } from '@react-three/drei';
import Electron from './Electron';
import { AtomProps, ElectronProps } from '@/app/_lib/types';

function Atom({ electron, atom }: { electron: ElectronProps; atom: AtomProps }) {
	const { radius, speed, width, length, decay } = electron;
	const { floatSpeed, floatIntensity } = atom;
	return (
		<group>
			<Electron radius={radius} width={width} length={length} decay={decay} speed={speed} rotation={[0, 0, 0]} />
			<Electron radius={radius} width={width} length={length} decay={decay} speed={speed * 1.2} rotation={[0, 0, Math.PI / 3]} />
			<Electron radius={radius} width={width} length={length} decay={decay} speed={speed * 1.4} rotation={[0, 0, -Math.PI / 3]} />
			<Float speed={atom.floatSpeed} floatIntensity={atom.floatIntensity}>
				<Sphere args={[0.25, 16, 16]}>
					<meshBasicMaterial color={[2, 5, 22]} toneMapped={false} />
				</Sphere>
			</Float>
		</group>
	);
}

export default Atom;

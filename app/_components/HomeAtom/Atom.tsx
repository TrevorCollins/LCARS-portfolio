import { Float, Sphere } from '@react-three/drei';
import Electron from './Electron';

function Atom(props: any) {
	return (
		<group>
			<Electron radius={props.electron.radius} rotation={[0, 0, 0]} speed={props.electron.speed} />
			<Electron radius={props.electron.radius} rotation={[0, 0, Math.PI / 3]} speed={props.electron.speed * 1.2} />
			<Electron radius={props.electron.radius} rotation={[0, 0, -Math.PI / 3]} speed={props.electron.speed * 1.4} />
			<Float speed={props.atom.floatSpeed} floatIntensity={props.atom.floatIntensity}>
				<Sphere args={[0.25, 16, 16]}>
					<meshBasicMaterial color={[2, 5, 22]} toneMapped={false} />
				</Sphere>
			</Float>
		</group>
	);
}

export default Atom;

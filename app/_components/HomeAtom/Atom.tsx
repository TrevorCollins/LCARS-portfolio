import { Float, Sphere } from '@react-three/drei';
import Electron from './Electron';

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

export default Atom;

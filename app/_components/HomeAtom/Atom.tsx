import { Sphere } from '@react-three/drei';
import Electron from './Electron';

function Atom() {
	return (
		<group>
			<Electron rotation={[0, 0, Math.PI / 2]} />
			<Electron rotation={[0, 0, Math.PI / 3 / 2]} />
			<Electron rotation={[0, 0, -Math.PI / 3 / 2]} />
			<Sphere args={[0.2]}>
				<meshBasicMaterial color={[2, 5, 22]} toneMapped={false} />
			</Sphere>
		</group>
	);
}

export default Atom;

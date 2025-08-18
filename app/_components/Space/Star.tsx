import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Vector3 } from 'three';
import { Points, Point, PositionPoint } from '@react-three/drei';

const Star = ({ position }: { position: Vector3; idx: number }) => {
	const pointRef = useRef<PositionPoint>(null);
	useFrame(() => {
		if (!pointRef.current) return;
		const point = pointRef.current;
		const pos = point.position.z;
		if (pos < -400) {
			point.translateZ(800);
		}
		point.translateZ(-2);
	});
	return (
		<Points>
			<pointsMaterial color="#fae9b2" />
			<Point ref={pointRef} position={[position.x, position.y, position.z]} />
		</Points>
	);
};

export default Star;

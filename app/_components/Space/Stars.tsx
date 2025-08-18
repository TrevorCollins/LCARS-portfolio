import { Vector3 } from 'three';
import Star from './Star';

const Stars = () => {
	const numStars = (window.innerWidth * window.innerHeight) / 3000; // Adjust density based on screen size
	const stars = Array.from({ length: numStars }, () => {
		const x = Math.floor(Math.random() * 800 - 400) + 200;
		const y = Math.floor(Math.random() * 800 - 400) + 200;
		const z = Math.floor(Math.random() * 800 - 400);
		return new Vector3(x, y, z);
	});
	return stars.map((star, idx) => <Star key={idx} position={star} idx={idx} />);
};

export default Stars;

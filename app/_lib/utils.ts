import { useState, useEffect } from 'react';

export function useIsMobile() {
	const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			function handleResize() {
				setWindowWidth(window.innerWidth);
			}

			window.addEventListener('resize', handleResize);

			handleResize();

			// Remove event listener on cleanup
			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	if (!windowWidth) return false;
	return windowWidth < 768;
}

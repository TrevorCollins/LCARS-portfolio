'use client';

import NavCon from './NavCon';
import LcarsSVG from './LcarsSVG';
import LcarsMobileSVG from './LcarsMobileSVG';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import NavHam from './NavHam';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const LCARS = () => {
	const [isOpen, setIsOpen] = useState(false);
	const currentPath = usePathname();
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	useEffect(() => {
		setIsOpen(false);
	}, [currentPath]);
	return (
		<>
			{isMobile ? (
				<>
					<LcarsMobileSVG />
					<NavHam isOpen={isOpen} setIsOpen={setIsOpen} />
				</>
			) : (
				<LcarsSVG />
			)}
			<NavCon isOpen={isOpen} />
		</>
	);
};

export default LCARS;

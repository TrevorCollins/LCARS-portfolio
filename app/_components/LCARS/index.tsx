'use client';

import NavCon from './NavCon';
import LcarsSVG from './LcarsSVG';
import LcarsMobileSVG from './LcarsMobileSVG';
import NavHam from './NavHam';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/app/_lib/utils';

const LCARS = () => {
	const [isOpen, setIsOpen] = useState(false);
	const currentPath = usePathname();
	let isMobile = false;

	if (typeof window !== 'undefined') {
		isMobile = useIsMobile();
	}

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

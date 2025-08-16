'use client';

import { navColorClasses } from '@/app/_lib/constants';
import { NavLinkType } from '@/app/_lib/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ path, label, color }: NavLinkType) => {
	const currentPath = usePathname();
	const isActive = currentPath === path;
	const spanClasses = isActive ? `active ${navColorClasses[color].active}` : navColorClasses[color].bg;

	return (
		<Link className={`nav-link ${isActive ? `${navColorClasses[color].active}` : navColorClasses[color].bg}`} href={path} prefetch>
			<span className={`nav__arrow hidden md:visible ${spanClasses}`} />
			{label}
		</Link>
	);
};

export default NavLink;

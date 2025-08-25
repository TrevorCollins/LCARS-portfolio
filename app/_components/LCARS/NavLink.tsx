import { navColorClasses } from '@/app/_lib/constants';
import { NavLinkType } from '@/app/_lib/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ path, label, color }: NavLinkType) => {
	const isActive = usePathname() === path;

	return (
		<Link className={`nav-link ${isActive ? `active ${navColorClasses[color].active}` : navColorClasses[color].bg}`} href={path} prefetch>
			{label}
		</Link>
	);
};

export default NavLink;

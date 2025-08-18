import { navLinks } from '@/app/_lib/constants';
import NavLink from './NavLink';

const NavCon = ({ isOpen }: { isOpen: boolean }) => {
	return (
		<nav className={`nav max-md:nav-mobile md:nav-desktop ${isOpen ? 'open' : ''}`}>
			{navLinks.map((link) => (
				<NavLink key={link.id} {...link} />
			))}
		</nav>
	);
};

export default NavCon;

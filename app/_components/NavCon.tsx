import { navLinks } from '../_lib/constants';
import NavLink from './NavLink';

const NavCon = () => {
	return (
		<nav>
			{navLinks.map((link) => (
				<NavLink key={link.id} {...link} />
			))}
		</nav>
	);
};

export default NavCon;

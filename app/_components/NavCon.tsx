import { navLinks } from '../_lib/constants';
import NavLink from './NavLink';

const NavCon = () => {
	return (
		<nav className="absolute left-[0dvw] top-[41dvh] flex h-[39dvh] w-[9.8dvw] flex-col items-center gap-[1dvh]">
			{navLinks.map((link) => (
				<NavLink key={link.id} {...link} />
			))}
		</nav>
	);
};

export default NavCon;

'use client';

import Link from 'next/link';
import { navColorClasses } from '../_lib/constants';
import { NavLinkType } from '../_lib/types';
import { usePathname } from 'next/navigation';

const NavCon = ({ path, label, color }: NavLinkType) => {
	const currentPath = usePathname();
	const isActive = currentPath === path;
	const spanClasses = isActive ? `active ${navColorClasses[color].active}` : navColorClasses[color].bg;
	// function flipSection() {
	// 	const state = Flip.getState('section');
	// 	Flip.from(state, {
	// 		duration: 0.5,
	// 		ease: 'power2.inOut',
	// 		stagger: 0.5,
	// 		absolute: true,
	// 		onEnter: elements => gsap.fromTo(elements, { autoAlpha: 0 }, { autoAlpha: 1 }),
	// 		onLeave: elements => gsap.to(elements, { autoAlpha: 0 }),
	// 	});
	// }
	return (
		<Link className={`h-full w-full ${navColorClasses[color]}`} href={path} prefetch>
			<div
				className={`hover:text-F-50/100 relative flex h-full w-full grow cursor-pointer items-center justify-center text-lg font-bold text-white/80 transition-all duration-300 hover:underline xl:text-2xl ${isActive ? `${navColorClasses[color].active}` : navColorClasses[color].bg}`}
			>
				<span className={`nav__arrow ${spanClasses}`} />
				{label}
			</div>
		</Link>
	);
};

export default NavCon;

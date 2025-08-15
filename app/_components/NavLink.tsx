'use client';

import Link from 'next/link';
import { navColorClasses } from '../_lib/constants';
import { NavLinkType } from '../_lib/types';
import { usePathname } from 'next/navigation';

const NavCon = ({ path, label, color }: NavLinkType) => {
	const currentPath = usePathname();
	const isActive = currentPath === path;
	const spanClasses = isActive
		? `active ${navColorClasses[color].active}`
		: navColorClasses[color].bg;
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
		<Link
			className={`nav__link ${navColorClasses[color]}`}
			href={path}
			prefetch
		>
			<div
				className={`nav__link-child ${isActive ? `${navColorClasses[color].active} text-F-50/100 underline` : navColorClasses[color].bg}`}
			>
				<span className={`nav__arrow ${spanClasses}`} />
				{label}
			</div>
		</Link>
	);
};

export default NavCon;

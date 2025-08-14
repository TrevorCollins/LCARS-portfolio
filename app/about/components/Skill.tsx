import { SkillType } from '@/app/_lib/types';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap } from 'gsap';

export const Skill = ({ label, percent, color }: { color: string } & SkillType) => {
	const skillRef = useRef<HTMLDivElement>(null);
	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.from('.skill__container', {
				autoAlpha: 0,
				y: -100,
				ease: 'power2.inOut',
				duration: 0.5,
				stagger: 0.2,
			});
			tl.from('.skill__bar', {
				width: 0,
				duration: 1,
			});
		},
		{ scope: skillRef, dependencies: [percent] }
	);

	const colorClasses: { [color: string]: string } = {
		A: 'bg-A',
		B: 'bg-B',
		C: 'bg-C',
		D: 'bg-D',
		E: 'bg-E',
	};
	return (
		<div ref={skillRef} className='skill'>
			<p className='skill__label'>{label}</p>
			<div className='skill__container'>
				<div className={`skill__bar ${colorClasses[color]}`} style={{ width: `${percent}%` }}>
					<span className='skill__percent'>{percent}%</span>
				</div>
			</div>
		</div>
	);
};

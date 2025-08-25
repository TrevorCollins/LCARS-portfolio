import type { ReactNode } from 'react';

type CardProps = {
	title: string;
	children: ReactNode;
	id: string;
	subHead?: string;
	rightItems?: ReactNode[];
	className?: string;
};

const Card = ({ title, children, id, subHead, rightItems, className }: CardProps) => {
	const animationDuration = Math.random() * 5 + 5;
	return (
		<section id={id} className={`card ${className}`} data-duration={animationDuration}>
			<header className="border-F/25 flex h-auto w-full flex-row items-center justify-between border-b pb-4">
				<div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
					<h3 className="font-teko text-2xl font-bold uppercase tracking-[.2rem]">{title}</h3>
					{subHead && <span className="text-F/50 font-oxanium text-sm">{subHead}</span>}
				</div>
				<div className="text-F/30 flex flex-col text-nowrap text-right text-sm">{rightItems && rightItems.map((item, idx) => <div key={idx}>{item}</div>)}</div>
			</header>
			<div className="font-oxanium h-[calc(100%-3rem)] w-full overflow-clip overflow-y-scroll scroll-smooth text-sm md:text-base">{children}</div>
		</section>
	);
};

export default Card;

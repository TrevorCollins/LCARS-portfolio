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
	return (
		<section id={id} className={`card bg-F/5 border-F/25 flex max-h-[67dvh] w-full grow flex-col items-start justify-between gap-2 rounded-xl border-2 p-4 xl:gap-4 ${className}`}>
			<header className="border-F/25 flex h-auto w-full flex-row items-center justify-between border-b pb-4">
				<div className="flex flex-row items-center gap-2">
					<h3 className="font-teko text-2xl font-bold uppercase tracking-[.2rem]">{title}</h3>
					{subHead && <span className="text-F/50 font-oxanium text-sm">{` - ${subHead}`}</span>}
				</div>
				<div className="text-F/30 flex flex-col text-right text-sm">{rightItems && rightItems.map((item, idx) => <div key={idx}>{item}</div>)}</div>
			</header>
			<div className="font-oxanium h-[calc(100%-3rem)] w-full overflow-y-auto scroll-smooth text-sm md:text-base">{children}</div>
		</section>
	);
};

export default Card;

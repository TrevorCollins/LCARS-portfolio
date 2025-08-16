import { Dispatch, type SetStateAction } from 'react';

type NavHamProps = {
	isOpen: boolean;
	setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
};

const NavHam = ({ isOpen, setIsOpen }: NavHamProps) => {
	return (
		<div className="fixed left-0 top-0 h-full w-full">
			<button onClick={() => setIsOpen((prev) => !prev)} className={`nav-ham ${isOpen ? 'open' : ''}`}>
				<svg className="fill-F-50/80" viewBox="0 0 100 100">
					<rect className="line line-1" rx="5" x="10" y="20" width="80" height="10" />
					<rect className="line line-2" rx="5" x="10" y="45" width="80" height="10" />
					<rect className="line line-3" rx="5" x="10" y="70" width="80" height="10" />
				</svg>
			</button>
		</div>
	);
};

export default NavHam;

'use client';

import HomeAtom from './_components/HomeAtom';
import AtomScene from './_components/HomeAtom/AtomScene';

export default function Home() {
	return (
		<section id="home" className="h-full w-full p-0">
			<HomeAtom>
				<AtomScene />
			</HomeAtom>
		</section>
	);
}

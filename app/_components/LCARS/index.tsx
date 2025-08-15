'use client';

import NavCon from '../NavCon';
import LcarsSVG from './LcarsSVG';
import LcarsMobileSVG from './LcarsMobileSVG';
import MediaQuery from 'react-responsive';

const LCARS = () => {
	return (
		<>
			<MediaQuery maxWidth={768}>
				<LcarsMobileSVG />
			</MediaQuery>
			<MediaQuery minWidth={768}>
				<LcarsSVG />
				<NavCon />
			</MediaQuery>
		</>
	);
};

export default LCARS;

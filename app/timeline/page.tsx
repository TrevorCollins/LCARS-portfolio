import { workHistory } from '../_lib/constants';
import Card from '../_components/Card';

const Timeline = () => {
	return (
		<div id='history' className='w-full h-full grid grid-cols-6 lg:grid-cols-12 lg:grid-rows-6 gap-[2dvw]'>
			{workHistory.map(({ id, company, start, end, location, details }) => (
				<Card key={id} id={id} title={company} subHead={location} rightItems={[start, end]} className='history__card col-span-6 row-span-3'>
					<ul className='history__list'>
						{details.map((d, idx) => (
							<li key={idx} className='history__item'>
								{d}
							</li>
						))}
					</ul>
				</Card>
			))}
		</div>
	);
};

export default Timeline;

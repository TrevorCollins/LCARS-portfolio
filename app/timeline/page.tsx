import { workHistory } from '../_lib/constants';
import Card from '../_components/Card';

const Timeline = () => {
	return (
		<div id="history" className="mx-auto flex h-full w-full flex-col gap-4 lg:w-2/3 xl:w-1/2">
			{workHistory.map(({ id, company, start, end, location, details }) => (
				<Card key={id} id={id} title={company} subHead={location} rightItems={[start, end]} className="history__card">
					<ul className="history__list">
						{details.map((d, idx) => (
							<li key={idx} className="history__item">
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

import { workHistory } from '../_lib/constants';
import Card from '../_components/Card';

const Timeline = () => {
	return (
		<div id="history" className="mx-auto flex h-fit w-full flex-col gap-4">
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

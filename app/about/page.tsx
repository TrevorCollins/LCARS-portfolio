import Bio from './components/Bio';
import Skills from './components/Skills';

const About = () => {
	return (
		<div className="grid h-full w-full grid-cols-6 gap-2 lg:grid-cols-12">
			<Bio className="col-span-6" />
			<Skills className="col-span-6" />
			{/* <Card id="hobbies" title="hobbies" className="col-span-6">
				Hobbies
			</Card> */}
		</div>
	);
};

export default About;

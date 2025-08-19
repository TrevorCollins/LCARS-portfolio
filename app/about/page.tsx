import Bio from './components/Bio';
import Skills from './components/Skills';

const About = () => {
	return (
		<div className="flex h-fit w-full flex-col gap-4">
			<Bio />
			<Skills />
			{/* <Card id="hobbies" title="hobbies" className="col-span-6">
				Hobbies
			</Card> */}
		</div>
	);
};

export default About;

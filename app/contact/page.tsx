import Card from '../_components/Card';
import Form from './components/Form';

const Contact = () => {
	return (
		<div
			id="contact"
			className="grid h-full w-full grid-cols-1 grid-rows-5 gap-4 lg:gap-8"
		>
			<Card id="contact-form" title="Let's chat!" className="row-span-4">
				<Form />
			</Card>
			<Card
				id="contact-info"
				title="Email Info"
				subHead="Get in touch"
				className="h-fit w-full lg:w-1/2"
			>
				<a href="mailto:contact@trevorcollins.me">contact@trevorcollins.me</a>
			</Card>
		</div>
	);
};

export default Contact;

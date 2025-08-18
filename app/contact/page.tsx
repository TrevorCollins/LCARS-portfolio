import Card from '../_components/Card';
import Form from './components/Form';

const Contact = () => {
	return (
		<div id="contact" className="flex h-full max-h-full w-full flex-col gap-4">
			<Card id="contact-form" title="Let's chat!" className="grow-4 max-h-4/5!">
				<Form />
			</Card>
			<Card id="contact-info" title="Email Info" subHead="Get in touch" className="grow-1 lg:w-1/2!">
				<a href="mailto:contact@trevorcollins.me">contact@trevorcollins.me</a>
			</Card>
		</div>
	);
};

export default Contact;

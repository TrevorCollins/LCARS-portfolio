import Card from '../_components/Card';
import Form from './components/Form';

const Contact = () => {
	return (
		<div id="contact" className="h-fit max-h-full w-full">
			<Card id="contact-form" title="Let's chat!" subHead="contact@trevorcollins.me">
				<Form />
			</Card>
		</div>
	);
};

export default Contact;

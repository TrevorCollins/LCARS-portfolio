interface ContactTemplateProps {
	name: string;
}

export function ContactTemplate({ name }: ContactTemplateProps) {
	return (
		<div>
			<h1>Welcome, {name}!</h1>
		</div>
	);
}

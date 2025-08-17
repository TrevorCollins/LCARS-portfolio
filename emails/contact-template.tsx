import { Body, Column, Container, Font, Head, Heading, Hr, Html, Img, Link, pixelBasedPreset, Preview, Row, Section, Tailwind, Text } from '@react-email/components';

const env = process.env.NEXT_PUBLIC_VERCEL_ENV;
const baseUrl = env === 'production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}` : '';

const portfolio = [
	{
		id: 1,
		description: 'A simple portfolio website for the best photographer in Kansas City (my wife).',
		url: 'https://gracesnyder.com',
		title: `Grace's Portfolio`,
		linkColor: 'text-tcPurple',
	},
	{
		id: 2,
		description: 'A business/portfolio website for a violin maker in Pittsburgh, PA. Still under construction.',
		url: 'https://gregorybtracy.com',
		title: `Greg's Portfolio`,
		linkColor: 'text-tcOrange',
	},
	{
		id: 3,
		description: `How many movies have Christopher Guest and Michael McKean been in together? Find out in this fun little app (my experimentation with 'vibe coding').`,
		url: 'https://costar-steel.vercel.app/',
		title: `Costars`,
		linkColor: 'text-tcRed',
	},
];

type ContactTemplateProps = {
	name: string;
	email: string;
	message: string;
	company?: string;
};

export default function ContactTemplate({ name, company, message, email }: ContactTemplateProps) {
	return (
		<Html>
			<Tailwind
				config={{
					presets: [pixelBasedPreset],
					theme: {
						extend: {
							colors: {
								tcBlack: '#100B07',
								tcWhite: '#A8F3C1',
								tcRed: '#EB696B',
								tcBlue: '#8D88F6',
								tcPurple: '#CB71CC',
								tcOrange: '#FFA100',
							},
						},
					},
				}}
			>
				<Preview>Hello from Trevor Collins</Preview>
				<Head>
					<Font
						fontFamily="Gemunu Libre"
						fallbackFontFamily="Verdana"
						webFont={{ url: 'https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@400&display=swap', format: 'truetype' }}
						fontStyle="normal"
						fontWeight={400}
					/>
					<Font
						fontFamily="Gemunu Libre"
						fallbackFontFamily="Verdana"
						webFont={{ url: 'https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@800&display=swap', format: 'truetype' }}
						fontStyle="normal"
						fontWeight={800}
					/>
					<title>{`Hello, ${name}!`}</title>
				</Head>
				<Body className="max-w-[500px] px-4 pb-4">
					<Heading className="mx-auto w-full leading-8 tracking-widest">
						Hello, <span className="text-tcBlue">{name}</span>!
					</Heading>
					<Hr />
					<Container className="bg-tcBlack/90 text-tcWhite my-6 w-full px-10 py-5">
						<Section>
							<Row>
								<Text className="text-tcWhite text-lg tracking-wide">Thank you so much for reaching out. I will respond as soon as possible.</Text>
								<Text className="text-tcWhite text-lg tracking-wide">In the meantime, feel free to check out my gitHub or any of my other projects linked below.</Text>
							</Row>
						</Section>
						<Section>
							<ul className="mx-auto w-[80%] list-none p-0">
								{portfolio.map((project) => (
									<li key={project.id} className="my-2 border-2 border-solid border-white p-4">
										<Link href={project.url} className={`${project.linkColor} text-xl font-extrabold tracking-widest`}>
											<span className="text-tcWhite">{project.title}</span>
										</Link>
										<br />
										{project.description}
									</li>
								))}
							</ul>
						</Section>
						<Section>
							<Row>
								<Text className="text-tcWhite text-lg tracking-wide">If there is anything I can do for you{company ? ` or ${company}` : ''}, please let me know.</Text>
							</Row>
						</Section>
					</Container>
					<Hr />
					<Text className="mt-5 text-xl tracking-widest">Live long and prosper 🖖,</Text>
					<Text className="text-xl tracking-widest">Trevor Collins</Text>
					<Section className="mx-auto w-[150px]">
						<Row>
							<Column align="left">
								<Link href="https://github.com/TrevorCollins">
									<Img src={`${baseUrl}/static/github.png`} alt="github" width={40} height={40} />
								</Link>
							</Column>
							<Column align="right">
								<Link href="https://www.linkedin.com/in/trevor50d/">
									<Img src={`${baseUrl}/static/linkedin.png`} alt="linkedIn" width={40} height={40} />
								</Link>
							</Column>
						</Row>
					</Section>
					<Section className="border-tcBlue mt-8 rounded-lg border-4 border-solid px-8">
						<Row>
							<Heading as="h2" className="text-tcPurple text-center">
								Message Summary
							</Heading>
						</Row>
						<Hr />
						<Row>
							<Text>
								<span className="text-tcRed text-lg font-bold">Name:</span> {name}
							</Text>
						</Row>
						<Row>
							<Text>
								<span className="text-tcRed text-lg font-bold">Email:</span> {email}
							</Text>
						</Row>
						{company && (
							<Row>
								<Text>
									<span className="text-tcRed text-lg font-bold">Company:</span> {company}
								</Text>
							</Row>
						)}
						<Row>
							<Text className="text-tcRed text-lg font-bold">Message:</Text>
							<Text>{message}</Text>
						</Row>
					</Section>
				</Body>
			</Tailwind>
		</Html>
	);
}

ContactTemplate.PreviewProps = {
	name: 'Test Name',
	company: 'Checking LLC',
} as ContactTemplateProps;

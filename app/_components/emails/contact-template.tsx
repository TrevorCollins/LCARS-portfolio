import { Body, Container, Font, Head, Heading, Hr, Html, Img, Link, pixelBasedPreset, Preview, Row, Section, Tailwind, Text } from '@react-email/components';

const env = process.env.NEXT_PUBLIC_VERCEL_ENV;
const baseUrl = env === 'production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000';

const portfolio = [
	{
		id: 1,
		description: 'A simple portfolio website for the best photographer in Kansas City (my wife).',
		url: 'https://gracesnyderdesign.com',
		title: `Grace's Portfolio`,
		linkColor: 'text-tcPurple',
	},
	{
		id: 2,
		description: 'A business/portfolio website for a violin maker in Pittsburgh, PA. Still under construction.',
		url: 'https://costar-steel.vercel.app/',
		title: `Greg's Portfolio`,
		linkColor: 'text-tcOrange',
	},
	{
		id: 3,
		description: `How many movies have Christopher Guest and Michael McKean been in together? Find out in this fun little app (my experimentation with 'vibe coding').`,
		url: 'https://gracesnyderdesign.com',
		title: `Costars`,
		linkColor: 'text-tcRed',
	},
];

const links = [
	{
		title: 'GitHub',
		href: 'https://github.com/TrevorCollins',
		icon: `${baseUrl}/github.png`,
	},
	{
		title: 'LinkedIn',
		href: 'https://linkedin.com/in/trevor50d',
		icon: `${baseUrl}/linkedin.png`,
	},
];

export default function ContactTemplate({ name, company }: { name: string; company?: string }) {
	return (
		<Html>
			<Head>
				<Font
					fontFamily='Gemunu Libre'
					fallbackFontFamily='Verdana'
					webFont={{ url: 'https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@400&display=swap', format: 'truetype' }}
					fontStyle='normal'
					fontWeight={400}
				/>
				<Font
					fontFamily='Gemunu Libre'
					fallbackFontFamily='Verdana'
					webFont={{ url: 'https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@800&display=swap', format: 'truetype' }}
					fontStyle='normal'
					fontWeight={800}
				/>
				<title>Hello, {name}!</title>
			</Head>
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
				<Body className='w-xl mx-auto'>
					<Heading className='w-full mx-auto tracking-widest leading-8'>
						Hello, <span className='text-tcBlue'>{name}</span>!
					</Heading>
					<Hr />
					<Container className='w-full h-full bg-tcBlack text-tcWhite px-10 py-5'>
						<Section>
							<Row>
								<Text className='text-lg tracking-wide'>Thank you so much for reaching out. I will respond as soon as possible.</Text>
								<Text className='text-lg tracking-wide'>In the meantime, feel free to check out my gitHub or any of my other projects linked below.</Text>
							</Row>
						</Section>
						<Section>
							<ul className='w-4/5 mx-auto flex flex-col justify-between gap-4 llist-disc list-outside'>
								{portfolio.map(project => (
									<li key={project.id}>
										<Link href={project.url} className={`${project.linkColor} text-xl tracking-widest font-extrabold`}>
											{project.title}
										</Link>
										<br />
										{project.description}
									</li>
								))}
							</ul>
						</Section>
						<Section>
							<Row>
								<Text className='text-lg tracking-wide'>If there is anything I can do for you{company ? ` or ${company}` : ''}, please let me know.</Text>
							</Row>
						</Section>
					</Container>
					<Hr />
					<Text className='text-xl tracking-widest'>Live long and prosper 🖖,</Text>
					<br />
					<Text className='text-xl tracking-widest'>Trevor Collins</Text>
					<Section>
						<Row className='w-1/2 mt-10 text-black/70 flex justify-around'>
							{links.map((link, idx) => (
								<Link key={idx} href={link.href}>
									<Img src={link.icon} alt={link.title} width={20} height={20} className='bg-black bg-clip-content' />
								</Link>
							))}
						</Row>
					</Section>
				</Body>
			</Tailwind>
		</Html>
	);
}

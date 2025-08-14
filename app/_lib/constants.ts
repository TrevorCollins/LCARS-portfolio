import type { JobType, NavLinkType, ProjectType, SkillType } from './types';
import GregTracyViolins from '../../public/images/projects/greg-tracy-violins.webp';
import Costar from '../../public/images/projects/costar.webp';
import GracePortfolio from '../../public/images/projects/grace-portfolio.webp';

export const navLinks: NavLinkType[] = [
	{ label: 'Home', path: '/', id: 'home', color: 'E' },
	{ label: 'About', path: '/about', id: 'about', color: 'B' },
	{ label: 'History', path: '/timeline', id: 'timeline', color: 'D' },
	{ label: 'Projects', path: '/projects', id: 'projects', color: 'A' },
	{ label: 'Contact', path: '/contact', id: 'contact', color: 'C' },
];

export const navColorClasses: { [color: string]: { bg: string; active: string } } = {
	A: { bg: 'bg-A/80 hover:bg-A/100', active: 'bg-A/100' },
	B: { bg: 'bg-B/80 hover:bg-B/100', active: 'bg-B/100' },
	C: { bg: 'bg-C/80 hover:bg-C/100', active: 'bg-C/100' },
	D: { bg: 'bg-D/80 hover:bg-D/100', active: 'bg-D/100' },
	E: { bg: 'bg-E/80 hover:bg-E/100', active: 'bg-E/100' },
};

export const skillsArr: SkillType[] = [
	{
		label: 'JavaScript/TypeScript',
		percent: 95,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'CSS/SCSS',
		percent: 95,
		categories: ['Coding', 'Frontend', 'Design'],
	},
	{
		label: 'React',
		percent: 95,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'Angular',
		percent: 80,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'NodeJS',
		percent: 80,
		categories: ['Coding', 'Backend'],
	},
	{
		label: 'MongoDB',
		percent: 60,
		categories: ['Coding', 'Backend'],
	},
	{
		label: 'SQL Server',
		percent: 65,
		categories: ['Coding', 'Backend'],
	},
	{
		label: 'Data Visualization',
		percent: 75,
		categories: ['Coding', 'Frontend', 'Design'],
	},
	{
		label: 'HTML',
		percent: 95,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'State Management',
		percent: 85,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'Storybook',
		percent: 70,
		categories: ['Coding', 'Design', 'Teamwork', 'Testing'],
	},
	{
		label: 'Jest',
		percent: 70,
		categories: ['Coding', 'Teamwork', 'Testing'],
	},
	{
		label: 'Visual Studio/VS Code',
		percent: 95,
		categories: ['Coding'],
	},
	{
		label: 'Git and TFS',
		percent: 80,
		categories: ['Coding', 'Teamwork'],
	},
	{
		label: 'Agile Scrum',
		percent: 90,
		categories: ['Teamwork'],
	},
	{
		label: 'Adobe Suite',
		percent: 95,
		categories: ['Design'],
	},
	{
		label: 'Graphic Design',
		percent: 95,
		categories: ['Design'],
	},
	{
		label: 'Photography',
		percent: 95,
		categories: ['Design'],
	},
	{
		label: 'Typescript',
		percent: 85,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'Next.js',
		percent: 85,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'Tailwind',
		percent: 80,
		categories: ['Coding', 'Frontend', 'Design'],
	},
	{
		label: 'gsap',
		percent: 50,
		categories: ['Coding', 'Frontend', 'Design'],
	},
	{
		label: 'three.js/react-three-fiber',
		percent: 50,
		categories: ['Coding', 'Frontend', 'Design'],
	},
];

export const skillCategories = ['Coding', 'Design', 'Teamwork', 'Frontend', 'Backend', 'Testing'];
export const skillSorts = [
	{ label: 'Proficiency', value: 'percent' },
	{ label: 'Name', value: 'label' },
];

export const bioCopy =
	'I am a full stack web developer with an eye for the front-end user experience and a solid understanding of backend frameworks. My passion for Coding combined with my experience in graphic design, photography, and music provide  a foundation for creative problem-solving. I bring a Midwest work ethic and a penchant for technology to all of my endeavors.';

export const workHistory: JobType[] = [
	{
		id: 'kvc',
		company: 'KVC',
		start: '08-2019',
		end: '05-2021',
		location: 'Olathe, KS',
		details: [
			'Developed forms, profiles, and pages with both AngularJS and React',
			'Worked with form data in MongoDB and client data in SQL Server',
			'Utilized TFS and later Git with Azure DevOps for version control',
			'Led the migration from AngularJS to React',
			'Contributed to the UX/UI design committee',
			'Managed tasks using Kanban and sprint boards in Azure DevOps',
		],
	},
	{
		id: 'koddi',
		company: 'Koddi',
		start: '05-2021',
		end: '08-2023',
		location: 'Fort Worth, TX',
		details: [
			'Collaborated with backend, QA, and product teams to ensure the timely and successful delivery of projects',
			'Played an active role in code reviews, upholding Coding standards',
			'Achieved a significant performance boost by refactoring the Redux store',
			'Demonstrated commitment to software quality by writing new unit tests',
			'Worked extensively within a React and Typescript-based codebase, implementing Redux, stylized components, Stripe, OAuth, and Chakra',
			'Engaged in agile practices including sprint planning and retros',
		],
	},
	{
		id: 'collage',
		company: 'Collage Group',
		start: '10-2023',
		end: '07-2025',
		location: 'Bethesda, MD',
		details: [
			'Created elaborate data visualizations using React and visx',
			'Maintained a proprietary component library npm package that used Jest and Storybook for unit testing',
			'Performed code reviews to ensure adherence to company Coding standards and best practices',
			'Collaborated with UI/UX designers to create user interfaces that were intuitive, visually appealing, and responsive',
			'Participated in code refactoring efforts for improving code maintainability',
			'Contributed ideas for continuous improvement of development processes',
			'Wrote technical documentation including design specifications and API documentation',
		],
	},
];

export const projects: ProjectType[] = [
	{
		id: 'greg-tracy-violins',
		name: 'Greg Tracy Violins',
		url: 'https://gregtracyviolins.com',
		repo: 'greg-tracy-violins',
		thumbnail: GregTracyViolins,
		description: 'A portfolio site for a violin maker and restorer in Pittsburgh, PA. (still under construction)',
	},
	{
		id: 'costar',
		name: 'Costar',
		url: 'https://costar-steel.vercel.app/',
		repo: 'costar',
		thumbnail: Costar,
		description:
			'"How many movies has John Cusack worked on with his sister Joan?" "What was that one show with Jean Smart and Jemaine Clement?" These questions have plagued me for years. This app was my solution.',
	},
	{
		id: 'grace-portfolio',
		name: 'Grace Snyder Photography',
		url: 'https://gracesnyder.com',
		repo: 'grace-portfolio',
		thumbnail: GracePortfolio,
		description: 'A portfolio site for a photographer in Kansas City, MO. Probably the best photographer in Kansas City. I might be biased though; she is my wife.',
	},
	{
		id: 'lcars',
		name: 'LCARS Portfolio',
		url: 'https://trevorcollins.me',
		repo: 'lcars',
		thumbnail: Costar,
		description: 'The site you are on right now!',
	},
];

export const socialLinks = [
	{
		url: 'https://github.com/TrevorCollins',
		title: 'Github',
		icon: '/images/github.png',
	},
	{
		url: 'https://linkedin.com/in/trevor50d',
		title: 'LinkedIn',
		icon: '/images/linkedin.png',
	},
];

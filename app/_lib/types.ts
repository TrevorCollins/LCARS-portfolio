import { StaticImageData } from 'next/image';
import * as z from 'zod';

export type AtomProps = {
	floatSpeed: number;
	floatIntensity: number;
	rotationIntensity: number;
};

export type BloomProps = {
	radius: number;
	luminanceThreshold: 1;
	intensity: 0.5;
	luminanceSmoothing: 0.5;
};
export type ElectronProps = {
	speed: number;
	radius: number;
	width: number;
	trailWidth: number;
	length: number;
	decay: number;
	rotation?: [x: number, y: number, z: number];
};

export type StarsProps = {
	count: number;
	speed: number;
};

export type NavLinkType = {
	label: string;
	path: string;
	id: string;
	color: string;
};

export type SkillType = {
	label: string;
	percent: number;
	categories: SkillCat[];
};

export type JobType = {
	id: string;
	company: string;
	start: string;
	end: string;
	location: string;
	details: string[];
};

export type ProjectType = {
	id: string;
	name: string;
	url: string;
	repo: string;
	thumbnail: StaticImageData;
	description: string;
};

export type SkillCat = 'Coding' | 'Design' | 'Teamwork' | 'Frontend' | 'Backend' | 'Testing' | 'None';

export const contactSchema = z.object({
	name: z.string().nonempty('Name is required'),
	company: z.string().optional(),
	email: z.email('Invalid email address'),
	message: z.string().nonempty('Message is required'),
});

export type ContactFormFields = z.infer<typeof contactSchema>;

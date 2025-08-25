import Card from '@/app/_components/Card';
import { ProjectType } from '@/app/_lib/types';
import Image from 'next/image';

const Project = ({ id, name, url, repo, thumbnail, description }: ProjectType) => {
	const projectLink = (
		<a href={url} target="_blank" className="project__link">
			View Project
		</a>
	);
	const repoLink = (
		<a href={`https://github.com/TrevorCollins/${repo}`} target="_blank" className="project__link">
			View Repo
		</a>
	);
	return (
		<Card id={id} title={name} rightItems={[projectLink, repoLink]} className="project__card">
			<div className="project__body">
				<Image src={thumbnail} sizes="(max-width: 1024px) 80dvw, (max-width: 1280px) 40dvw, 20dvw" alt={name} className="project__image" />
				<p className="project__description">{description}</p>
			</div>
		</Card>
	);
};

export default Project;

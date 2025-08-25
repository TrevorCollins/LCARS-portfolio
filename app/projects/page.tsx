import { projects } from '../_lib/constants';
import Project from './components/Project';

const Projects = () => {
	return (
		<div id="projects" className="flex h-fit w-full flex-col gap-4">
			{projects.map((project) => (
				<Project key={project.id} {...project} />
			))}
		</div>
	);
};

export default Projects;

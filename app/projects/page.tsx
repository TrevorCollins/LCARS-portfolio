import { projects } from '../_lib/constants';
import Project from './components/Project';

const Projects = () => {
	return (
		<div id="projects" className="grid h-fit w-full grid-cols-6 gap-4 lg:grid-cols-12 lg:grid-rows-6">
			{projects.map((project) => (
				<Project key={project.id} {...project} />
			))}
		</div>
	);
};

export default Projects;

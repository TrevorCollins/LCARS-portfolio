import { projects } from '../_constants';
import Project from './components/Project';

const Projects = () => {
	return (
		<div id='projects' className='w-full h-full grid grid-cols-6 lg:grid-cols-12 lg:grid-rows-6 gap-[2dvw]'>
			{projects.map(project => (
				<Project key={project.id} {...project} />
			))}
		</div>
	);
};

export default Projects;

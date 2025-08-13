'use client';

import { useState } from 'react';
import { skillsArr } from '../../_constants';
import { Skill } from './Skill';
import { SkillType } from '@/app/_types';
import Card from '@/app/_components/Card';
import SkillActions from './SkillActions';

const colorArr = ['A', 'D', 'B', 'E', 'C'];

const Skills = ({ ...props }) => {
	const [sortedSkills, setSortedSkills] = useState<SkillType[]>([...skillsArr]);

	return (
		<Card id='skills' title='Skills' {...props}>
			<SkillActions sortedSkills={sortedSkills} setSortedSkills={setSortedSkills} />
			<div className='skills__body h-full '>
				{sortedSkills.map((skill, idx) => (
					<Skill key={skill.label} {...skill} color={colorArr[idx % colorArr.length]} />
				))}
			</div>
		</Card>
	);
};

export default Skills;

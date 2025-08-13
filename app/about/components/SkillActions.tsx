import { skillCategories, skillSorts } from '@/app/_constants';
import { SkillCat, SkillType } from '@/app/_types';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type SkillActionsProps = {
	sortedSkills: SkillType[];
	setSortedSkills: Dispatch<SetStateAction<SkillType[]>>;
};

const SkillActions = ({ sortedSkills, setSortedSkills }: SkillActionsProps) => {
	const [filter, setSkillActions] = useState<SkillCat | 'None'>('None');
	const [sort, setSort] = useState<keyof SkillType>('percent');

	useEffect(() => {
		const filteredArr = [...sortedSkills].filter(skl => {
			if (!filter || filter === 'None') return skl;
			return skl.categories.indexOf(filter) > -1;
		});
		setSortedSkills(filteredArr);
	}, [filter]);
	useEffect(() => {
		const sortedArr = [...sortedSkills].sort((a, b) => {
			if (sort === 'percent') {
				return b.percent - a.percent; // Sort by percent in descending order
			}
			if (sort === 'label') {
				return a.label.localeCompare(b.label); // Sort by label alphabetically
			}
			return 0;
		});
		setSortedSkills(sortedArr);
	}, [sort]);

	return (
		<div className='skills__actions'>
			<div className='skill__action'>
				<label htmlFor='filter-select'>Filter</label>
				<select className='skill__action' id='filter-select' onChange={e => setSkillActions(e.target.value as SkillCat)} value={filter}>
					<option value='None'>None</option>
					{skillCategories.map(cat => (
						<option key={cat} value={cat}>
							{cat}
						</option>
					))}
				</select>
			</div>
			<div className='skill__action'>
				<label htmlFor='sort-select'>Sort</label>
				<select className='skill__action' id='sort-select' onChange={e => setSort(e.target.value as keyof SkillType)} value={sort}>
					{skillSorts.map(({ label, value }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default SkillActions;

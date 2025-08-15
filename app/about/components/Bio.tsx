import Card from '@/app/_components/Card';
import { bioCopy } from '../../_lib/constants';
import Image from 'next/image';
import ProfileImage from '../../../public/images/profile.jpeg';

const Bio = ({ ...props }) => {
	return (
		<Card title="Bio" id="bio" {...props}>
			<div className="flex h-fit w-full flex-col justify-between gap-4 lg:flex-row">
				<Image src={ProfileImage} alt="Trevor" className="bio__image" />
				<div className="bio__info">
					<div className="bio__line">
						<b>Name</b>
						<p>Trevor Collins</p>
					</div>
					<span className="bio__divider" />
					<div className="bio__line">
						<b>Location</b>
						<p>Kansas City, MO</p>
					</div>
					<span className="bio__divider" />
					<div className="bio__line">
						<b>Occupation</b>
						<p>Frontend Developer</p>
					</div>
				</div>
			</div>
			<div className="mt-4 h-auto w-full text-2xl leading-10 tracking-widest">
				{bioCopy}
			</div>
		</Card>
	);
};

export default Bio;

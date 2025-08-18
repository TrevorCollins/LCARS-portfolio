const Header = () => {
	const nameArr = 'Trevor Collins'.split('');
	return (
		<header className="absolute right-0 top-0 my-[1dvh] h-[10dvh] max-h-[10dvh] w-full px-[1dvw] md:w-[88dvw]">
			<div className="text-C-300 flex h-full w-full items-center justify-center opacity-80 md:justify-end">
				<h1 className="flex w-full flex-row justify-around">
					{nameArr.map((letter, idx) => (
						<span className="font-teko text-5xl font-extrabold uppercase md:text-7xl xl:text-[8rem]" key={idx}>
							{letter}
						</span>
					))}
				</h1>
			</div>
		</header>
	);
};

export default Header;

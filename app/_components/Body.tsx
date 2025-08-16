const Body = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="main absolute right-[3dvw] top-[20dvh] flex h-[67dvh] w-[90dvw] flex-row gap-[2dvw] overflow-auto overflow-y-scroll md:right-[2dvw] md:top-[29dvh] md:h-[60dvh] md:w-[83dvw]">
			<div className="scroll-ref h-[50vh]">{children}</div>
		</main>
	);
};

export default Body;

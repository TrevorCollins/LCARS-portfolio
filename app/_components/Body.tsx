const Body = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="fixed bottom-[12dvh] left-[4dvw] right-[4dvw] top-[18dvh] mx-auto flex h-full max-h-[72dvh] w-full max-w-[92dvw] flex-row content-center gap-[2dvw] overflow-hidden overflow-y-scroll p-4 py-8 md:bottom-[86dvh] md:left-[12dvw] md:right-[0dvw] md:top-[28dvh] md:max-h-[62dvh] md:max-w-[88dvw] md:p-8 lg:max-w-3xl">
			{children}
		</main>
	);
};

export default Body;

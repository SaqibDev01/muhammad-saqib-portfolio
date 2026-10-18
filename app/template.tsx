export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div aria-hidden="true" className="route-line" />
			<div className="page-in h-full">{children}</div>
		</>
	);
}

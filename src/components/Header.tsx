export function Header() {
	return (
		<div>
			<header className="bg-taskCard-neutral py-4 select-none border-b border-taskCard-border">
				<div className="container mx-auto flex justify-between items-center">
					<h1 className="text-white text-3xl font-semibold">
						<span>To</span>
						<span className="text-taskCard-project">do</span> list
					</h1>
				</div>
			</header>
		</div>
	);
}
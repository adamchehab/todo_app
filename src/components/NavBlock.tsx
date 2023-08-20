export function NavBlock({
	searchItem,
	setSearchItem,
	filter,
	setFilter,
	setAddTaskWindow,
}) {
	return (
		<div className="bg-taskCard-neutral mb-2 mx-auto max-w-md rounded-b-md">
			{/* Search bar */}
			<div className="mx-auto max-w-md p-2">
				<input
					className="w-full h-7 rounded-[3px] text-sm pl-2 outline-none"
					placeholder="Фильтр по проекту или задаче"
					value={searchItem}
					onChange={(e) => setSearchItem(e.target.value)}
				/>
			</div>
			{/* Filter and button block */}
			<div className="flex justify-between">
				{/* Filter */}
				<div className="text-sm text-taskCard-description_text pl-2">
					<input
						type="checkbox"
						checked={filter}
						onChange={() => setFilter(!filter)}
					></input>{" "}
					Скрыть выполненные
				</div>
				{/* Button */}
				<div>
					<button
						className="bg-taskCard-project text-sm pl-2 pr-2 p-1 rounded-[3px] hover:bg-taskCard-projectDarker transition-all duration-400 hover:text-gray-200 mr-2 mb-2 shadow-md shadow-taskCard-project/50 hover:shadow-inner"
						onClick={() => setAddTaskWindow(true)}
					>
						Добавить
					</button>
				</div>
			</div>
		</div>
	);
}

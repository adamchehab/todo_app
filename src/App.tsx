import { useState } from "react";
import "./App.css";
import tasks_data from "./tasks.json";

function TaskList() {
	const [filter, setFilter] = useState(false);
	const [tasks, setTasks] = useState(tasks_data);

	const [searchItem, setSearchItem] = useState("");

	// TODO в отдельный компонент вынести
	// TODO choose better colors
	// TODO заменить чяекбоксы на иконки?
	// TODO проидумать что я вообще делаю для начала, и мб сделать с ниме ту штуку или browser extention?
	// QUESTION как сделать лучше именовать цвета где хранить и тп, в tailwind.js?

	// TODO make color picker extention with zoom feature on hold?
	// QUESTION how to make externtion? with react

	// TODO add tags to tasks
	// TODO add add task
	// TODO add search

	// TODO transition

	// TODO make priority border?

	// NOTE я ща чето делаю но вдруг это плохая практика? вдруг можно лучше? но лучше делать а не делать да?

	function handleTaskStatusChange(taskId: number) {
		setTasks(
			tasks.map((task) => {
				if (task.id === taskId) {
					return { ...task, completed: !task.completed };
				}
				return task;
			})
		);
	}

	function handleFilterToggle() {
		setFilter(!filter);
	}

	let filter_tasks = tasks;

	if (filter === true) {
		filter_tasks = tasks.filter((task) => task.completed === false);
	}

	filter_tasks = filter_tasks.filter(
		(item) =>
			item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
			item.project.toLowerCase().includes(searchItem.toLowerCase())
	);

	function handleSearchItem(e) {
		setSearchItem(e.target.value);
	}

	return (
		<>
			{/* Header */}
			<div>
				<header className="bg-taskCard-neutral py-4 select-none border-b border-taskCard-border">
					<div className="container mx-auto flex justify-between items-center">
						<h1 className="text-white text-3xl font-semibold">
							<span>To</span>
							<span className="text-taskCard-project">
								do
							</span>{" "}
							list
						</h1>
					</div>
				</header>
			</div>
			<div className="bg-darkColor justify-center items-center h-screen">
				{/* Top block */}
				<div className="bg-taskCard-neutral mb-2 pb-2 pt-2 mx-auto max-w-md rounded-b-md p-1">
					{/* Search bar */}
					<div className="mx-auto max-w-md p-2">
						<input
							className="w-full h-7 rounded-[3px] text-sm pl-2"
							placeholder="Фильтр по проекту или задаче"
							value={searchItem}
							onChange={handleSearchItem}
						/>
					</div>
					{/* Filter */}
					<div className="text-sm text-taskCard-description_text mx-auto max-w-md pl-2">
						Скрыть выполненные:{" "}
						<input
							type="checkbox"
							checked={filter}
							onChange={handleFilterToggle}
						></input>
					</div>
				</div>
				{/* Tasks */}
				{filter_tasks.map((task) => (
					<>
						<div
							key={task.id}
							className={
								task.completed
									? "completed_task_card"
									: "task_card"
							}
							onClick={() => handleTaskStatusChange(task.id)}
						>
							<div className="flex items-center">
								<input
									type="checkbox"
									className="mr-2"
									checked={task.completed}
								/>

								<p>{task.name}</p>
							</div>
							<p className={` text-taskCard-project text-sm`}>
								{task.project}
							</p>
							<p
								className={`text-taskCard-description_text font-light text-sm `}
							>
								{task.description}
							</p>
						</div>
					</>
				))}
			</div>
		</>
	);
}

export default function App() {
	return (
		<>
			<TaskList />
		</>
	);
}

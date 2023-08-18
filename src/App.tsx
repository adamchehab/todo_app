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

	filter_tasks = filter_tasks.filter((item) =>
		item.name.toLowerCase().includes(searchItem.toLowerCase()) || item.project.toLowerCase().includes(searchItem.toLowerCase())
	);

	function handleSearchItem(e) {
		setSearchItem(e.target.value);
	}

	return (
		<>
			{/* Header */}
			<div>
				<header className="bg-taskCard-neutral py-4 select-none">
					<div className="container mx-auto flex justify-between items-center">
						<h1 className="text-white text-3xl font-semibold">
							Todo list
						</h1>
					</div>
				</header>
			</div>
			<div className="bg-darkColor justify-center items-center h-screen">
				{/* Search bar */}
				<div>
					<label>
						<input
							type="text"
							className="text-sm"
							placeholder="Фильтр по проекту или задаче"
							value={searchItem}
							onChange={handleSearchItem}
						/>
					</label>
				</div>
				{/* Filter */}
				<div className="text-taskCard-description_text">
					Скрыть выполненные:{" "}
					<input
						type="checkbox"
						checked={filter}
						onChange={handleFilterToggle}
					></input>
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

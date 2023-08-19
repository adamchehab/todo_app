import { useState } from "react";
import "./App.css";
import tasks_data from "./tasks.json";

import { Header } from "./components/header.tsx";
import { NavBlock } from "./components/NavBlock.tsx";
import { TaskList } from "./components/TaskList.tsx";

export default function TaskListApp() {
	const [filter, setFilter] = useState(false);
	const [tasks, setTasks] = useState(tasks_data);
	const [searchItem, setSearchItem] = useState("");

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

	function handleSearchItem(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchItem(e.target.value);
	}

	return (
		<>
			{/* Header */}
			<Header />
			{/* Main Content */}
			<div className="bg-darkColor justify-center items-center h-screen">
				{/* Nav Block */}
				<NavBlock
					searchItem={searchItem}
					handleSearchItem={handleSearchItem}
					filter={filter}
					handleFilterToggle={handleFilterToggle}
				/>
				{/* Tasks List */}
				<TaskList
					tasks={filter_tasks}
					handleTaskStatusChange={handleTaskStatusChange}
				/>
			</div>
		</>
	);
}

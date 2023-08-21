import { useState } from "react";
import "./App.css";
import tasks_data from "./tasks.json";

import { Header } from "./components/Header.tsx";
import { NavBlock } from "./components/NavBlock.tsx";
import { TaskList } from "./components/TaskList.tsx";
import { AddTaskPopup } from "./components/AddTaskPopup.tsx";

export default function TaskListApp() {
	const [tasks, setTasks] = useState(tasks_data);
	const [filter, setFilter] = useState(false);
	const [searchItem, setSearchItem] = useState("");
	const [addTaskWindow, setAddTaskWindow] = useState(false);

	
	// Filter
	let filter_tasks = tasks;
	if (filter === true) {
		filter_tasks = tasks.filter((task) => task.completed === false);
	}
	filter_tasks = filter_tasks.filter(
		(item) =>
			item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
			item.project.toLowerCase().includes(searchItem.toLowerCase())
	);

	return (
		<>
			{/* Header */}
			<Header />
			{/* Main Content */}
			<div className="bg-darkColor justify-center items-center h-screen">
				{/* Nav Block */}
				<NavBlock
					searchItem={searchItem}
					setSearchItem={setSearchItem}
					filter={filter}
					setFilter={setFilter}
					setAddTaskWindow={setAddTaskWindow}
				/>
				{/* Tasks List */}
				<TaskList tasks={filter_tasks} setTasks={setTasks} />
				<AddTaskPopup
					addTaskWindow={addTaskWindow}
					setAddTaskWindow={setAddTaskWindow}
					tasks={tasks}
					setTasks={setTasks}
				/>
			</div>
		</>
	);
}

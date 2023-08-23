import { useState } from "react";
import "./App.css";
import tasks_data from "./tasks.json";

import { Header, NavBlock, TaskList, AddTaskPopup } from "./components/index";

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
			{/* Page Content div*/}
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
				{/* Add task popup */}
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

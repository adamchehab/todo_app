import { useState, useEffect } from "react";
import "./App.css";
import tasks_data from "./tasks.json";

import { Header, NavBlock, TaskList, AddTaskPopup } from "./components/index";

export default function TaskListApp() {
	const [tasks, setTasks] = useState([]);
	const [filter, setFilter] = useState(false);
	const [searchItem, setSearchItem] = useState("");
	const [addTaskWindow, setAddTaskWindow] = useState(false);

	// Retrieve data from local storage on component mount
	useEffect(() => {
		const storedData = localStorage.getItem("myTasks");
		if (storedData) {
			setTasks(JSON.parse(storedData));
		}
	}, []);

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

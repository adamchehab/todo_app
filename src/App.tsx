import { useState, Fragment } from "react";
import "./App.css";
import tasks_data from "./tasks.json";

// function TaskCard(props) {
// 	return (
// 		<div
// 			key={props.key}
// 			classNameName={props.complete ? "completed_task_card" : "task_card"}
// 		>
// 			<label classNameName="flex items-center">
// 				<input
// 					type="checkbox"
// 					classNameName="mr-2"
// 					checked={props.complete}
// 					onChange={props.onStatusChange}
// 				/>

// 				<h3>{props.name}</h3>
// 			</label>
// 			<p classNameName="text-taskdCardDescriptionColor">
// 				{props.description}
// 			</p>
// 			<i>complete: {props.complete ? "True" : "False"}</i>
// 		</div>
// 	);
// }

function TaskList() {
	const [filter, setFilter] = useState(false);
	const [tasks, setTasks] = useState(tasks_data);

	// TODO в отдельный компонент вынести
	// function handleTaskStatusChange(taskId) {
	// 	setTasks(
	// 		tasks.map((task) => {
	// 			if (task.id === taskId) {
	// 				return { ...task, completed: true };
	// 			} else {
	// 				return task;
	// 			}
	// 		})
	// 	);
	// }
	// function handleTaskStatusChange() {
	// 	setTasks(tasks.map((task) => task));
	// }

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

	return (
		<>
			<div>
				<header className="bg-gray-800 py-4">
					<div className="container mx-auto flex justify-between items-center">
						<h1 className="text-white text-3xl font-semibold">
							Website Header
						</h1>
						<nav>
							<a
								href="#"
								className="text-gray-300 hover:text-white px-3 py-2"
							>
								Home
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white px-3 py-2"
							>
								About
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white px-3 py-2"
							>
								Contact
							</a>
						</nav>
					</div>
				</header>
			</div>
			<div>
				Filter:{" "}
				<input
					type="checkbox"
					checked={filter}
					onChange={handleFilterToggle}
				></input>
			</div>
			{filter_tasks.map((task) => (
				<>
					<div
						key={task.id}
						className={
							task.completed ? "completed_task_card" : "task_card"
						}
						onClick={() => handleTaskStatusChange(task.id)}
					>
						<div className="flex items-center">
							<input
								type="checkbox"
								className="mr-2"
								checked={task.completed}
								// onChange={() => {
								// 	handleTaskStatusChange(task.id);
								// }}
							/>

							<p>{task.name}</p>
						</div>
						<p className="text-taskdCardDescriptionColor">
							{task.description}
						</p>
						{/* <i>complete: {task.completed ? "True" : "False"}</i> */}
					</div>
				</>
			))}
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

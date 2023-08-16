import { useState } from "react";
import "./App.css";
import tasks_data from "./tasks.json";

function TaskCard(props) {
	return (
		<div
			key={props.key}
			className={props.complete ? "completed_task_card" : "task_card"}
		>
			<label className="flex items-center">
				<input
					type="checkbox"
					className="mr-2"
					checked={props.complete}
					onChange={props.onStatusChange}
				/>

				<h3>{props.name}</h3>
			</label>
			<p className="text-taskdCardDescriptionColor">
				{props.description}
			</p>
			<i>complete: {props.complete ? "True" : "False"}</i>
		</div>
	);
}

function TaskList() {
	const [tasks, setTasks] = useState(tasks_data);

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

	function handleTaskStatusChange(taskId) {
		setTasks(
			tasks.map((task) => {
				if (task.id === taskId) {
					return { ...task, completed: !task.completed };
				}
				return task;
			})
		);
	}

	// const filter_tasks = tasks_data.filter((task) => task.completed === false);

	return (
		<>
			{tasks.map((task) => (
				<TaskCard
					key={task.id}
					name={task.name}
					description={task.description}
					complete={task.completed}
					onStatusChange={handleTaskStatusChange}
					// onCheck={handleCheckboxChange}
				/>
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

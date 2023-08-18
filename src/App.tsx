import { useState } from "react";
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
	// TODO choose better colors
	// TODO заменить чяекбоксы на иконки?
	// TODO проидумать что я вообще делаю для начала, и мб сделать с ниме ту штуку или browser extention?
	// QUESTION как сделать лучше именовать цвета где хранить и тп, в tailwind.js?

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
			{/* Header */}
			<div>
				<header className="bg-testColor py-4 select-none">
					<div className="container mx-auto flex justify-between items-center">
						<h1 className="text-white text-3xl font-semibold">
							Todo list
						</h1>
					</div>
				</header>
			</div>
			{/* Filter */}
			<div className="text-white">
				Filter:{" "}
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
						<p
							className={
								!task.completed
									? "text-taskCard-description_text"
									: "text-taskCard-description_text text-opacity-25"
							}
						>
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

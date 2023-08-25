import { AiOutlineClose } from "react-icons/ai";

import { db } from "../firebase";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";

export function TaskList({ tasks }) {
	async function handleTaskStatusChange(todo) {
		// QUESTION: i guess i dont need that anymore cuz i get them updated from db..?
		// setTasks(
		// 	tasks.map((task) => {
		// 		if (task.id === todo.id) {
		// 			return { ...task, completed: !task.completed };
		// 		}
		// 		return task;
		// 	})
		// );
		await updateDoc(doc(db, "todos", todo.id), {
			completed: !todo.completed,
		});
	}

	async function handleTaskDelete(taskId) {
		// setTasks(tasks.filter((task) => task.id !== taskId));
		await deleteDoc(doc(db, "todos", taskId));
	}

	// TODO перенести сюда Add task а потом и вообще в reducer
	return (
		<>
			{tasks.map((task) => (
				<div
					key={task.id}
					className={
						task.completed ? "completed_task_card" : "task_card"
					}
					onClick={() => handleTaskStatusChange(task)}
				>
					<div className="flex items-center justify-between">
						<input
							type="checkbox"
							className="mr-2"
							checked={task.completed}
						/>
						<p className="mr-auto">{task.name}</p>
						<AiOutlineClose
							className="opacity-20 hover:opacity-100 hover:text-red-500"
							onClick={(e) => {
								e.stopPropagation();
								handleTaskDelete(task.id);
							}}
						/>
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
			))}
		</>
	);
}

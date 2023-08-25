import { AiOutlineClose } from "react-icons/ai";

export function TaskList({ tasks, setTasks }) {
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

	function handleTaskDelete(taskId: number) {
		const newData = tasks.filter((task) => task.id !== taskId);
		setTasks(newData);
		localStorage.setItem("myTasks", JSON.stringify(newData));
	}

	return (
		<>
			{tasks.map((task) => (
				<>
					<div
						key={task.id}
						className={
							task.completed ? "completed_task_card" : "task_card"
						}
						onClick={() => handleTaskStatusChange(task.id)}
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
				</>
			))}
		</>
	);
}

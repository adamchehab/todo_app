import { AiOutlineClose } from "react-icons/ai";
import { HiFlag } from "react-icons/hi";

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
		setTasks(tasks.filter((task) => task.id !== taskId));
	}

	function get_color(task): string {
		if (task.completed === true) return "text-taskCard-description_text";

		switch (task.priority) {
			case 1:
				return "text-yellow-500";
			case 2:
				return "text-orange-500";
			case 3:
				return "text-red-500";
			default:
				return "text-white";
		}
	}

	return (
		<>
			{tasks.map((task) => (
				<>
					<div
						key={task.id}
						className={`${
							task.completed ? "completed_task_card" : "task_card"
						}`}
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
						<p
							className={`${
								task.completed
									? `text-taskCard-description_text`
									: `text-taskCard-project`
							} text-sm font-semibold`}
						>
							{task.project}
						</p>
						<p
							className={`text-taskCard-description_text font-light text-sm `}
						>
							{task.description}
						</p>
						{task.priority !== 0 ? (
							<HiFlag
								className={`transition-all duration-200 ${get_color(
									task
								)}`}
							/>
						) : null}
					</div>
				</>
			))}
		</>
	);
}

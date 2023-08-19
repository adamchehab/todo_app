export function TaskList({ tasks, handleTaskStatusChange }) {
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
						<div className="flex items-center">
							<input
								type="checkbox"
								className="mr-2"
								checked={task.completed}
							/>
							<p>{task.name}</p>
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

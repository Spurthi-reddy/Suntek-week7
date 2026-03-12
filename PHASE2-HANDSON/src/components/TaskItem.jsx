const productImageByPriority = {
  low: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
  medium:
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
  high: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80',
}

const brandByPriority = {
  low: 'Essentials Co.',
  medium: 'Urban Select',
  high: 'Premium Studio',
}

const priceByPriority = {
  low: '$29.99',
  medium: '$59.99',
  high: '$99.99',
}

function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <article className={`task-item ${task.completed ? 'task-item--done' : ''}`}>
      <img
        src={productImageByPriority[task.priority]}
        alt={task.title}
        className="task-item__image"
      />

      <div className="task-item__content">
        <p className="pill">{task.priority.toUpperCase()} PRIORITY</p>
        <h3>{task.title}</h3>

        <p>
          <strong>Brand:</strong> {brandByPriority[task.priority]}
        </p>
        <p>
          <strong>Description:</strong> Complete this {task.priority} priority task in
          the current sprint cycle.
        </p>
        <p>
          <strong>Price:</strong> {priceByPriority[task.priority]}
        </p>

        <div className="task-item__actions">
          <button type="button" onClick={() => onToggleTask(task.id)}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  )
}

export default TaskItem

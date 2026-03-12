import { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'

const initialTasks = [
  {
    id: 1,
    title: 'Create landing page hero section',
    priority: 'high',
    completed: false,
  },
  {
    id: 2,
    title: 'Review product copy updates',
    priority: 'medium',
    completed: true,
  },
]

function TaskManager() {
  const [tasks, setTasks] = useState(initialTasks)
  const [nextId, setNextId] = useState(initialTasks.length + 1)

  const addTask = (taskData) => {
    const newTask = {
      id: nextId,
      title: taskData.title,
      priority: taskData.priority,
      completed: false,
    }

    setTasks((previousTasks) => [newTask, ...previousTasks])
    setNextId((previousId) => previousId + 1)
  }

  const toggleTaskCompletion = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const deleteTask = (taskId) => {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== taskId))
  }

  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <section className="task-manager">
      <header className="task-manager__header">
        <h1>Task Manager</h1>
        <p>Track tasks with validation, completion toggles, and deletion actions.</p>
      </header>

      <div className="task-manager__stats">
        <div className="stat-card">
          <span>Total Tasks</span>
          <strong>{tasks.length}</strong>
        </div>
        <div className="stat-card">
          <span>Completed</span>
          <strong>{completedCount}</strong>
        </div>
      </div>

      <AddTaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTaskCompletion}
        onDeleteTask={deleteTask}
      />
    </section>
  )
}

export default TaskManager

import { useState } from 'react'

const defaultFormState = {
  title: '',
  priority: 'medium',
}

function AddTaskForm({ onAddTask }) {
  const [formValues, setFormValues] = useState(defaultFormState)
  const [errors, setErrors] = useState({
    title: '',
  })

  const validate = () => {
    const nextErrors = {
      title: '',
    }

    if (!formValues.title.trim()) {
      nextErrors.title = 'Task title is required.'
    } else if (formValues.title.trim().length < 3) {
      nextErrors.title = 'Task title must be at least 3 characters.'
    }

    setErrors(nextErrors)
    return !nextErrors.title
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validate()) {
      return
    }

    onAddTask({
      title: formValues.title.trim(),
      priority: formValues.priority,
    })

    setFormValues(defaultFormState)
    setErrors({ title: '' })
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit} noValidate>
      <h2>Add New Task</h2>

      <label htmlFor="title">Task Title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={formValues.title}
        onChange={handleInputChange}
        placeholder="Enter task title"
      />
      {errors.title && <p className="field-error">{errors.title}</p>}

      <label htmlFor="priority">Priority</label>
      <select
        id="priority"
        name="priority"
        value={formValues.priority}
        onChange={handleInputChange}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTaskForm

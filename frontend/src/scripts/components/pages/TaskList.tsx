import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { Task } from '../../../types/Task'

const tasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description 3',
  },
]

const TaskList: React.FC = () => {
  return (
    <div>
      <Box display='flex' alignItems='center'>
        <TextField label='Search by task title' variant='outlined' />
        <Button variant='contained'>Search</Button>
        <Button variant='contained'>New task</Button>
      </Box>
      {
        tasks.map(task => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList
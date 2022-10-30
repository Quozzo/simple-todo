import React from 'react'
import { ListContainer } from './ListContainer/ListContainer'
import NewTodo from './NewTodo/NewTodo'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import ListTodos from './ListTodos/ListTodos'

export default function Todo() {
	return (
		<ListContainer>
			<Typography variant='h6' gutterBottom>
				Todo List
			</Typography>
			<Grid container spacing={2}>
				<NewTodo />
				<ListTodos />
			</Grid>
		</ListContainer>
	)
}

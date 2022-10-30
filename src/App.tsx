import { Container } from '@mui/material'
import React from 'react'
import './App.css'
import Todo from './Components/Todo'

function App() {
	return (
		<div className='App'>
			<Container maxWidth='md' sx={{ margin: '20px auto' }}>
				<Todo />
			</Container>
		</div>
	)
}

export default App

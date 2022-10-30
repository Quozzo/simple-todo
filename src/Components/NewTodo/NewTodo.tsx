import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { useItemContext } from '../ListContainer/ListContainer'
import { itemDefaultData } from '../ListContainer/listContainer.model'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Row } from '../Flexbox/Flexbox'
import Button from '@mui/material/Button'

const defaultText = ''
export default function NewTodo() {
	const { itemActions } = useItemContext()
	const [text, setText] = useState(defaultText)

	const onChange: ChangeEventHandler<HTMLInputElement> = e => setText(e.target.value)
	const onSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		const newItem = { ...itemDefaultData, id: `${Math.random()}`, title: text }
		itemActions.new({ item: newItem })
		setText(defaultText)
	}

	return (
		<Grid item xs={12}>
			<form onSubmit={onSubmit}>
				<Row style={{ gap: '1.4rem' }}>
					<div style={{ flex: 1 }}>
						<TextField fullWidth label='Enter a todo item' variant='outlined' onChange={onChange} value={text} />
					</div>
					<Row>
						<Button type='submit' variant='outlined' sx={{ flex: 1 }}>
							Add
						</Button>
					</Row>
				</Row>
			</form>
		</Grid>
	)
}

import React, { MouseEventHandler } from 'react'
import { IItem } from '../ListContainer/listContainer.model'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { useItemContext } from '../ListContainer/ListContainer'

export default function Item({ id, title, completed }: IItem) {
	const { itemActions } = useItemContext()
	const onComplete: MouseEventHandler<HTMLButtonElement> = () => {
		itemActions.toggle({ id })
	}

	return (
		<Grid item xs={12} key={id}>
			<Paper elevation={3} sx={{ display: 'flex', alignItems: 'center' }}>
				<Checkbox checked={completed} inputProps={{ 'aria-label': 'Checkbox demo' }} defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} onClick={onComplete} />
				{title}
			</Paper>
		</Grid>
	)
}

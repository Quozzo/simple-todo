import React from 'react'
import Grid from '@mui/material/Grid'

interface IListGroup {
	items: JSX.Element[]
	title: string
}

export default function ListGroup({ items, title }: IListGroup) {
	return (
		<>
			{items.length ? (
				<>
					<Grid item>{title}</Grid>
					{items}
				</>
			) : null}
		</>
	)
}

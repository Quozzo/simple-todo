import React from 'react'
import Item from '../Item/Item'
import { useItemContext } from '../ListContainer/ListContainer'
import { IItem } from '../ListContainer/listContainer.model'
import ListGroup from './ListGroup'

export default function ListTodos() {
	const { items } = useItemContext()

	const pending = items.filter(item => !item.completed).map((item: IItem) => <Item {...item} />)
	const completed = items.filter(item => item.completed).map((item: IItem) => <Item {...item} />)

	return (
		<>
			<ListGroup items={pending} title='Pending' />
			<ListGroup items={completed} title='Completed' />
		</>
	)
}

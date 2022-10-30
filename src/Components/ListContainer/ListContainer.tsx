import React, { createContext, useContext, useMemo, useReducer } from 'react'

import { ITodoContext, IItem, IActionNew, IActionToggle, IItemToggle, IItemNew, itemsDefaultData } from './listContainer.model'

function itemReducer(items: IItem[], action: IActionNew | IActionToggle) {
	switch (action.action) {
		case 'new': {
			return [...items, action.item]
		}
		case 'toggle': {
			// I would prefer to use the immer package which allows mutating the state instead of looping over them
			return items.map(item => (item.id === action.id ? { ...item, completed: !item.completed } : item))
		}
		default: {
			return items
		}
	}
}

export const ItemContext = createContext<ITodoContext>({
	items: itemsDefaultData,
	itemActions: { toggle: () => void 0, new: () => void 0 },
})

export function useItemContext() {
	return useContext(ItemContext)
}

export function ListContainer({ children }: { children: JSX.Element[] }) {
	const [items, dispatchItem] = useReducer(itemReducer, itemsDefaultData)

	//The dispatch
	const itemActions = useMemo(
		() => ({
			toggle({ id }: IItemToggle) {
				dispatchItem({ action: 'toggle', id })
			},
			new({ item }: IItemNew) {
				dispatchItem({ action: 'new', item })
			},
		}),
		[]
	)

	const itemData = {
		items,
		itemActions,
	}

	return <ItemContext.Provider value={itemData}>{children}</ItemContext.Provider>
}

export default ItemContext

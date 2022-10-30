export type IResponsibilities = string

export interface IItem {
	id: string | null
	title: string | null
	completed: boolean
}

export interface IActionNew {
	action: 'new'
	item: IItem
}

export interface IActionToggle {
	action: 'toggle'
	id: IItem['id']
}

interface IItemActions {
	new: ({ item }: IItemNew) => void
	toggle: ({ id }: IItemToggle) => void
}

export interface ITodoContext {
	items: IItem[]
	itemActions: IItemActions
}

export interface IItemToggle {
	id: IItem['id']
}

export interface IItemNew {
	item: IItem
}

export const itemsDefaultData: IItem[] = []
export const itemDefaultData: IItem = { id: null, title: null, completed: false }

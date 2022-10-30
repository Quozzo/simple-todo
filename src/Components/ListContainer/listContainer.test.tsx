import React from 'react'
import { renderHook, waitFor } from '@testing-library/react'
import { ListContainer, useItemContext } from './ListContainer'
import { itemDefaultData } from './listContainer.model'
import { act } from 'react-dom/test-utils'

const id = `123`
const newItem = { ...itemDefaultData, title: 'New item', id }
const wrapper = ({ children }: { children: JSX.Element }) => <ListContainer>{children}</ListContainer>

describe('List Context', () => {
	test('List Context can be accessed', () => {
		const { result } = renderHook(() => useItemContext(), { wrapper })
		expect(result.current.items).toBeDefined()
		expect(result.current.itemActions).toBeDefined()
	})

	test('List is empty by default', () => {
		const { result } = renderHook(() => useItemContext(), { wrapper })
		expect(result.current.items.length).toEqual(0)
	})

	test('Can add an item', () => {
		const { result } = renderHook(() => useItemContext(), { wrapper })
		act(() => result.current.itemActions.new({ item: newItem }))
		expect(result.current.items.length).toEqual(1)
	})

	test('Added item is set to the default pending', () => {
		const { result } = renderHook(() => useItemContext(), { wrapper })
		act(() => result.current.itemActions.new({ item: newItem }))
		expect(result.current.items.filter(item => item.completed).length).toEqual(0)
		expect(result.current.items.filter(item => !item.completed).length).toEqual(1)
	})

	test('Can toggle an item to completed', () => {
		const { result } = renderHook(() => useItemContext(), { wrapper })
		act(() => result.current.itemActions.new({ item: newItem }))
		act(() => result.current.itemActions.toggle({ id }))
		expect(result.current.items.filter(item => item.completed).length).toEqual(1)
		expect(result.current.items.filter(item => !item.completed).length).toEqual(0)
	})
})

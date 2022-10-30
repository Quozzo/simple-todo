import React from 'react'

interface IFlexBox {
	children: JSX.Element | JSX.Element[]
	style?: React.CSSProperties
}

export function Col({ children, style }: IFlexBox) {
	return <div style={{ display: 'flex', flexDirection: 'column', ...style }}>{children}</div>
}

export function Row({ children, style }: IFlexBox) {
	return <div style={{ display: 'flex', flexDirection: 'row', ...style }}>{children}</div>
}

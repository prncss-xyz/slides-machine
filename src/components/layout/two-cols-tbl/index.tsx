import { styled } from '@/generated/styled-system/jsx'

export const TwoColsTbl = styled('div', {
	base: {
		'& th': {
			width: '40vw',
		},
		'& td': {
			p: 3,
		},
		'& tbody tr:nth-child(odd)': {
			backgroundColor: 'gray4',
		},
	},
})

import { styled } from '@/generated/styled-system/jsx'

export const SimpleTbl = styled('div', {
	base: {
		'& th': {
			p: 3,
		},
		'& td': {
			p: 3,
		},
		'& tbody tr:nth-child(odd)': {
			backgroundColor: 'gray4',
		},
	},
})

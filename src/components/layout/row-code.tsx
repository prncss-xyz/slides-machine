import { styled } from '@/generated/styled-system/jsx'

export const RowCode = styled('div', {
	base: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '3em',
		['& > :first-child']: {
			flexGrow: 1,
			width: '30vw',
		},
		['& > *:not(:first-child)']: {
			flexGrow: 3,
			width: '55vw',
		},
	},
})

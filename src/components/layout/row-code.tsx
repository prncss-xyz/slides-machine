import { styled } from '@/generated/styled-system/jsx'

export const RowCode = styled('div', {
	base: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		['& > *:first-child']: { backgroundColor: 'pink' },
		['& > *:not(:first-child)']: {
			backgroundColor: 'yellow',
			flexGrow: 4,
			minWidth: '20vw',
		},
	},
})

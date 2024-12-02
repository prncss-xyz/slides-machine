import { cva } from '@/generated/styled-system/css'
import { styled } from '@/generated/styled-system/jsx'

const style = cva({
	base: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '6',
	},
	variants: {
		level: {
			1: {},
			2: {
				gap: '4',
			},
			3: {
				gap: '3',
			},
		},
	},
})

export const Row = styled('div', style)

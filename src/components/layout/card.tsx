import { cva } from '@/generated/styled-system/css'
import { styled } from '@/generated/styled-system/jsx'

const style = cva({
	base: {
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: 'gray7',
		borderRadius: 5,
		p: 4,
	},
	variants: {
		size: {
			1: { borderRadius: 4, p: 2 },
			2: { borderRadius: 4, p: 3 },
			3: {},
			4: { borderRadius: 5, p: 5 },
			5: { borderRadius: 6, p: 7 },
		},
	},
})

export const Card = styled('div', style)

import { cva } from '@/generated/styled-system/css'
import { styled } from '@/generated/styled-system/jsx'

const style = cva({
	base: {
    py: 2,
		px: 3,
		borderRadius: 3,
		color: 'white',
    fontSize: 3,
		backgroundColor: 'link',
		'&:disabled': {
			color: 'grayA8',
			backgroundColor: 'grayA3',
		},
	},
	variants: {},
})

export const Button = styled('button', style)

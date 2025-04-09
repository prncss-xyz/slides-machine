import { styled } from '@/generated/styled-system/jsx'

export const Ul = styled('ul', {
	base: {
		maxWidth: 'readable',
		listStyleType: 'disc',
		listStylePosition: 'inside',
		':where(ul,ol) &': {
			listStyleType: 'circle',
			marginLeft: '1em',
		},
		':where(ul,ol) :where(ul,ol) &': {
			listStyleType: 'square',
			marginLeft: '1em',
		},
	},
})

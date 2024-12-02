import { styled } from '@/generated/styled-system/jsx'

export const Ul = styled('ul', {
	base: {
		listStyleType: 'disc',
		listStylePosition: 'inside',
		maxWidth: 'readable',
		'ul &, ol &': {
			listStyleType: 'circle',
			marginLeft: '1em',
		},
		'ul ol &, ol ol &, ul ul &, ol ul &': {
			listStyleType: 'square',
			marginLeft: '1em',
		},
	},
})

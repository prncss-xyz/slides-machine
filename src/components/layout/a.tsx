import { css } from '@/generated/styled-system/css'
import { ReactNode } from 'react'
import Link from 'next/link'

const link = css({
	cursor: 'pointer',
	color: 'link',
})

export const A = (props: { href?: string; children?: ReactNode }) =>
	props.href?.startsWith('/') || props.href?.startsWith('.') ? (
		<Link
			{...(props as { href: string; children?: ReactNode })}
			className={link}
		/>
	) : (
		<a target="_blank" className={link} {...props} />
	)

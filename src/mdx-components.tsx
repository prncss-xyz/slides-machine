/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXComponents } from 'mdx/types'
import { AnnotationHandler, InnerLine } from 'codehike/code'
import { Pre, RawCode, highlight } from 'codehike/code'
import { ReactNode } from 'react'
import { A } from './components/layout/a'
import { Slide } from './slides/slides'
import { Img } from './components/next/img'
import { Ul } from './components/layout/ul'
import { P } from './components/layout/p'
import { Heading } from './components/layout/heading'
import { css } from './generated/styled-system/css'

const H1 = (props: { children: ReactNode }) => <Heading level={1} {...props} />
const H2 = (props: { children: ReactNode }) => <Heading level={2} {...props} />
const H3 = (props: { children: ReactNode }) => <Heading level={3} {...props} />
const H4 = (props: { children: ReactNode }) => <Heading level={4} {...props} />
const H5 = (props: { children: ReactNode }) => <Heading level={5} {...props} />
const H6 = (props: { children: ReactNode }) => <Heading level={6} {...props} />

const mark: AnnotationHandler = {
	name: 'mark',
	Line: ({ annotation, ...props }) => {
		const color = annotation?.query || 'rgb(14 165 233)'
		return (
			<div
				className={css({
					display: 'flex',
					borderLeft: 'solid 2px transparent',
					borderLeftColor: annotation && color,
					backgroundColor: annotation && `lightgreen`,
					padding: '0 0.5em',
				})}
			>
				<InnerLine merge={props} />
			</div>
		)
	},
	Inline: ({ annotation, children }) => {
		const color = annotation?.query || 'rgb(14 165 233)'
		return (
			<span
				className={css({
					outline: `solid 1px rgb(from ${color} r g b / 0.5)`,
					background: `rgb(from ${color} r g b / 0.13)`,
					padding: '0 0.5em',
					borderRadius: '0.25em',
				})}
			>
				{children}
			</span>
		)
	},
}

async function Code({ codeblock }: { codeblock: RawCode }) {
	const highlighted = await highlight(codeblock, 'github-light')
	return (
		<Pre
			code={highlighted}
			handlers={[mark]}
			className={css({
				fontFamily: 'mono',
				maxHeight: '80vh',
				overflow: 'scroll',
				backgroundColor: 'white',
			})}
		/>
	)
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		slide: Slide,
		h1: H1,
		h2: H2,
		h3: H3,
		h4: H4,
		h5: H5,
		h6: H6,
		p: P,
		ul: Ul,
		a: A,
		img: Img,
		Code,
	} as any
}

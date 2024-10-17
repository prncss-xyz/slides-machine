'use client'
import { Pre, highlight } from 'codehike/code'
import { useEffect, useState } from 'react'

function stringify(value: unknown) {
	if (typeof value === 'object' && value !== null) {
		let res = '{\n'
		for (const [k, v] of Object.entries(value as object)) {
			res += `\t${JSON.stringify(k)}: ${stringify(v)},\n`
		}
		res += '}\n'
		return res
	}
	return JSON.stringify(value)
}

export function Json({ value }: { value: unknown }) {
	const [res, setRes] = useState<JSX.Element | null>(null)
	useEffect(() => {
		highlight(
			{ value: stringify(value), lang: 'json', meta: '' },
			'github-dark',
		).then((res) => {
			setRes(<Pre code={res} />)
		})
	}, [value])
	return res
}

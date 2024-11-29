'use client'

import { atom, useSetAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { atomEffect } from 'jotai-effect'
import { ReactNode, useCallback, useEffect, useRef } from 'react'

function clamp(min: number, max: number, value: number) {
	return Math.max(min, Math.min(max, value))
}

function getItem(key: string) {
	const value = localStorage.getItem(key)
	if (value === null) return
	return JSON.parse(value)
}

const slidesAtom = atom<(() => void)[]>([])
const activeSlideAtomRaw = atomWithStorage('activeSlide', 0, {
	getItem,
	setItem: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
	removeItem: (key) => localStorage.removeItem(key),
	subscribe: (key, cb) => {
		const handel = setInterval(() => cb(getItem(key)), 500)
		return () => clearInterval(handel)
	},
})

export const focusSlideAtom = atom(null, (get) => {
	const slides = get(slidesAtom)
	const index = get(activeSlideAtomRaw)
	slides[index]?.()
})

export const activeSlideEffect = atomEffect((get, set) => {
	get(activeSlideAtomRaw)
	set(focusSlideAtom)
})

export const activeSlideAtom = atom(
	null,
	(get, set, arg: ((n: number) => number) | number) => {
		const slides = get(slidesAtom)
		const index = clamp(
			0,
			slides.length - 1,
			typeof arg === 'function' ? arg(get(activeSlideAtomRaw)) : arg,
		)
		set(activeSlideAtomRaw, index)
	},
)

export function Slide({ children }: { children?: ReactNode }) {
	const ref = useRef<HTMLDivElement>(null)
	const focus = useCallback(
		() => ref.current?.scrollIntoView({ behavior: 'smooth' }),
		[ref],
	)
	const setSlides = useSetAtom(slidesAtom)
	useEffect(() => {
		setSlides((prev) => [...prev, focus])
		return () => {
			setSlides((prev) => prev.filter((fn) => fn !== focus))
		}
	}, [focus, setSlides])
	return (
		<div
			ref={ref}
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '100vh',
			}}
		>
			{children}
		</div>
	)
}

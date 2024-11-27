'use client'

import { useDocumentHotkeys } from '@/document-hotkeys'
import { useSetAtom } from 'jotai'
import { ReactNode, useMemo } from 'react'
import { activeSlideAtom } from './slides'

function useKeyNav() {
	const setActiveSlide = useSetAtom(activeSlideAtom)
	useDocumentHotkeys(
		useMemo(
			() => ({
				f: () => setActiveSlide((i) => i),
				n: () => setActiveSlide((i) => i + 1),
				p: () => setActiveSlide((i) => i - 1),
				0: () => setActiveSlide(0),
				l: () => setActiveSlide(Infinity),
			}),
			[setActiveSlide],
		),
	)
}

export function KeyNav({ children }: { children: ReactNode }) {
	useKeyNav()
	return children
}

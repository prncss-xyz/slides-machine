'use client'

import { useDocumentHotkeys } from '@/document-hotkeys'
import { useAtomValue, useSetAtom } from 'jotai'
import { ReactNode, useMemo } from 'react'
import { activeSlideAtom, activeSlideEffect, focusSlideAtom } from './slides'
import { useWindowResize } from '@/window-resize'

function useKeyNav() {
	const setActiveSlide = useSetAtom(activeSlideAtom)
	const setFocusSlide = useSetAtom(focusSlideAtom)
	useWindowResize(setFocusSlide)
	useDocumentHotkeys(
		useMemo(
			() => ({
				f: () => setFocusSlide(),
				n: () => setActiveSlide((i) => i + 1),
				p: () => setActiveSlide((i) => i - 1),
				0: () => setActiveSlide(0),
				l: () => setActiveSlide(Infinity),
			}),
			[setActiveSlide, setFocusSlide],
		),
	)
}

export function KeyNav({ children }: { children: ReactNode }) {
	useKeyNav()
	useAtomValue(activeSlideEffect)
	return children
}

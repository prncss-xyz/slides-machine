import { useEffect } from 'react'
import { getDebouncer } from './utils/debouncer'

export function useWindowResize(handler: () => void) {
	const debounced = getDebouncer(handler, 500)
	useEffect(() => {
		window.addEventListener('resize', debounced)
		return () => {
			window.removeEventListener('resize', debounced)
		}
	}, [debounced, handler])
}

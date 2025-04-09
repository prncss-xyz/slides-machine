import { Box } from '@/generated/styled-system/jsx'
import { ReactNode } from 'react'

export function ImgBox({ children }: { children: ReactNode }) {
	return <Box width="13em">{children}</Box>
}

export function TextBox({ children }: { children: ReactNode }) {
	return <Box width="40ch">{children}</Box>
}


import { ReactNode } from 'react'
import { Flex } from '@radix-ui/themes'

export function Row2({ children }: { children: ReactNode }) {
	return (
		<Flex gap="4" direction="row" align="center" justify="center">
			{children}
		</Flex>
	)
}

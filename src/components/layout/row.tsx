import { ReactNode } from 'react'
import { Flex } from '@radix-ui/themes'

export function Row({ children }: { children: ReactNode }) {
	return (
		<Flex gap="6" direction="row" align="center" justify="center">
			{children}
		</Flex>
	)
}

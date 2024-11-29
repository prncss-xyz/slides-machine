import { ReactNode } from 'react'
import { Flex } from '@radix-ui/themes'

export function Col({ children }: { children: ReactNode }) {
	return (
		<Flex
      gap="4"
      direction="column"
      align="center"
      justify="center"
      width="30vw"
    >
			{children}
		</Flex>
	)
}

import { Flex } from '@/generated/styled-system/jsx'
import { FiCheck, FiX } from 'react-icons/fi'
export function Good() {
	return (
		<Flex justify="center" align="center">
			<FiCheck size={20} style={{ color: 'ok' }} />
		</Flex>
	)
}

export function Bad() {
	return (
		<Flex justify="center" align="center">
			<FiX size={20} style={{ color: 'error' }} />
		</Flex>
	)
}

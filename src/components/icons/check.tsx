import { Flex } from '@/generated/styled-system/jsx'
import { FiCheck, FiX } from 'react-icons/fi'

export function Good() {
	return (
		<Flex justify="center" align="center">
			<FiCheck size={20} style={{ color: '#116329' }} />
		</Flex>
	)
}

export function Bad() {
	return (
		<Flex justify="center" align="center">
			<FiX size={20} style={{ color: '#CF222E' }} />
		</Flex>
	)
}

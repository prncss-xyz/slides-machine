import { FiCheck, FiX } from 'react-icons/fi'
export function Good() {
	return <FiCheck size={20} style={{ color: 'var(--green-9)' }} />
}

export function Bad() {
	return <FiX size={20} style={{ color: 'var(--red-9)' }} />
}

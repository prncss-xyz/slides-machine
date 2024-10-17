'use client'
import { Flex, Button } from '@radix-ui/themes'
import { useReducer } from 'react'
import { lightsMachine } from './machine'
import { Json } from '@/components/json'

export function Lights() {
	const [state, send] = useReducer(
		lightsMachine.reducer,
		lightsMachine.initial,
	)
	const next = () => send('next')
	return (
		<Flex direction="column" gap="1">
			<Button onClick={next}>Next</Button>
			<Json value={state} />
		</Flex>
	)
}

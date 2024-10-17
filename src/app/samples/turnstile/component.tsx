'use client'
import { Flex, Button } from '@radix-ui/themes'
import { useReducer } from 'react'
import { turnstileMachine } from './machine'
import { Json } from '@/components/json'

export function Turnstile() {
	const [state, send] = useReducer(
		turnstileMachine.reducer,
		turnstileMachine.initial,
	)
	const pay = () => send('pay')
	const canPay =
		turnstileMachine.reducer(state, 'pay') !== state
	const push = () => send('push')
	const canPush =
		turnstileMachine.reducer(state, 'push') !== state
	return (
		<Flex direction="column" gap="6">
			<Flex direction="column" gap="1">
				<Button disabled={!canPay} onClick={pay}>
					Pay
				</Button>
				<Button disabled={!canPush} onClick={push}>
					Push
				</Button>
			</Flex>
			<Json value={state} />
		</Flex>
	)
}

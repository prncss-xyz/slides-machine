'use client'
import { Flex, Button } from '@radix-ui/themes'
import { useReducer } from 'react'
import { turnstileMachine } from './machine'
import { Json } from '@/components/json'

function useTurnstile() {
	const [state, send] = useReducer(
		turnstileMachine.reducer,
		turnstileMachine.initial,
	)
	return {
		pay: () => send('pay'),
		canPay:
			turnstileMachine.reducer(state, 'pay') !== state,
		push: () => send('push'),
		canPush:
			turnstileMachine.reducer(state, 'push') !== state,
		state,
	}
}

export function Turnstile() {
	const turnstile = useTurnstile()
	return (
		<Flex direction="column" gap="1">
			<Button
				disabled={!turnstile.canPay}
				onClick={turnstile.pay}
			>
				Pay
			</Button>
			<Button
				disabled={!turnstile.canPush}
				onClick={turnstile.push}
			>
				Push
			</Button>
			<Json value={turnstile.state} />
		</Flex>
	)
}

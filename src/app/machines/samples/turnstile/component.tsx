'use client'
import { Button } from '@/components/layout/button'
import { useReducer } from 'react'
import { turnstileMachine } from './machine'
import { Json } from '@/components/json'
import { Box, Flex } from '@/generated/styled-system/jsx'

function useTurnstile() {
	// !mark[/useReducer/]
	const [state, send] = useReducer(
		turnstileMachine.reducer,
		turnstileMachine.initial,
	)
	return {
		pay: () => send('pay'),
		// !mark(1:2)
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
		<Flex direction="column" gap="3">
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
			</Flex>
			<Box width="8em">
				<Json value={turnstile.state} />
			</Box>
		</Flex>
	)
}

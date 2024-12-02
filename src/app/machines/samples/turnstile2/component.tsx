'use client'
import { useEffect, useMemo, useReducer } from 'react'
import { turnstileMachine } from './machine'
import { Json } from '@/components/json'
import { localCached } from '@/utils/localCached'
import { Box, Flex } from '@/generated/styled-system/jsx'
import { Button } from '@/components/layout/button'

function useTurnstile() {
	const [state, send] = useReducer(
		turnstileMachine.reducer,
		turnstileMachine.initial,
	)
	const paymentHandler = useMemo(
		() => localCached('now', payment, send),
		[send],
	)
	useEffect(() => {
		if (state.type === 'payment') {
			return paymentHandler(state)
		}
	}, [paymentHandler, state])
	return {
		pay: () =>
			send({ type: 'pay', id: '123', now: Date.now() }),
		canPay:
			turnstileMachine.reducer(state, {
				type: 'pay',
				id: '123',
				now: 0,
			}) !== state,
		push: () => send({ type: 'push' }),
		canPush:
			turnstileMachine.reducer(state, { type: 'push' }) !==
			state,
		state,
	}
}

export function Turnstile2() {
	const turnstile = useTurnstile()
	return (
		<Flex direction="column" gap="6">
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
			<Box width="13em">
				<Json value={turnstile.state} />
			</Box>
		</Flex>
	)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function payment(_: {
	id: string
	now: number
}): Promise<
	{ amount: number; type: 'success' } | { type: 'error' }
> {
	return new Promise((resolve) => {
		setTimeout(() => {
			const r = Math.random()
			if (r < 0.5) {
				resolve({ type: 'error' })
				return
			}
			const amount = Math.round(Math.random() * 10)
			resolve({ amount, type: 'success' })
		}, 1000)
	})
}

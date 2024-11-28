'use client'
import { Flex, Button } from '@radix-ui/themes'
import { useEffect, useMemo, useState } from 'react'
import { Message, turnstileMachine } from './machine'
import { Json } from '@/components/json'
import toast from 'react-hot-toast'
import { localCached } from '@/utils/localCached'

function useMachine<State, Event, Message>(
	{
		initial,
		reducer,
	}: {
		initial: State
		reducer: (
			state: State,
			event: Event,
			emit: (message: Message) => void,
		) => State
	},
	emit: (message: Message) => void,
) {
	const [state, setState] = useState(initial)
	return {
		state,
		send: (event: Event) => {
			const nextState = reducer(state, event, emit)
			return setState(nextState)
		},
		next: (event: Event) => {
			const nextState = reducer(state, event, () => {})
			return nextState
		},
	}
}

function useTurnstile() {
	const { state, send, next } = useMachine(
		turnstileMachine,
		listener,
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
			next({ type: 'pay', id: '123', now: 0 }) !== state,
		push: () => send({ type: 'push' }),
		canPush: next({ type: 'push' }) !== state,
		state,
	}
}

export function Turnstile3() {
	const turnstile = useTurnstile()
	return (
		<Flex direction="column" gap="1" width="45vh">
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

function listener(message: Message) {
	switch (message.type) {
		case 'error':
			toast.error('Payment refused')
			return
		case 'success':
			toast.success(
				`Payment accepted, you still have ${message.amount} tickets`,
			)
			return
	}
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

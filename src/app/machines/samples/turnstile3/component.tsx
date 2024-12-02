'use client'
import { useEffect, useState } from 'react'
import { Message, turnstileMachine } from './machine'
import { Json } from '@/components/json'
import toast from 'react-hot-toast'
import { Box, Flex } from '@/generated/styled-system/jsx'
import { Button } from '@/components/layout/button'

function useMachine<State, Event, Message>(
	initial: State,
	reducer: (
		state: State,
		event: Event,
		emit: (message: Message) => void,
	) => State,
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
		turnstileMachine.initial,
		turnstileMachine.reducer,
		listener,
	)
	useEffect(() => {
		if (state.type === 'payment') {
			return payment(state, send)
		}
	}, [send, state])
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

function listener(message: Message) {
	switch (message.type) {
		case 'error':
			toast.error('Payment refused')
			return
		case 'success':
			toast.success(
				'Payment accepted, you still have ' +
					message.amount +
					'tickets',
			)
			return
	}
}

let lastPayment = 0
function payment(
	{
		now,
	}: {
		id: string
		now: number
	},
	send: (message: Message) => void,
) {
	if (lastPayment === now) return
	lastPayment = now
	const handel = setTimeout(() => {
		const r = Math.random()
		if (r < 0.5) {
			send({ type: 'error' })
			return
		}
		const amount = Math.round(Math.random() * 10)
		send({ amount, type: 'success' })
	}, 1000)
	return () => clearTimeout(handel)
}

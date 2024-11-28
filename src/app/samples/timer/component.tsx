'use client'
import { Flex, Button, Box } from '@radix-ui/themes'
import { useEffect, useReducer, useState } from 'react'
import { timerMachine } from './machine'
import { Json } from '@/components/json'
import { count } from './count'

function useTimer(now: number) {
	const [state, send] = useReducer(
		timerMachine.reducer,
		timerMachine.initial,
	)
	return {
		state,
		toggle: () => send({ type: 'toggle', now }),
		reset: () => send({ type: 'reset', now }),
		count: Math.round(count(state, now) / 1000),
		next: timerMachine.reducer(state, {
			type: 'toggle',
			now,
		}).type,
	}
}

function useNow() {
	const [now, setNow] = useState(Date.now())
	useEffect(() => {
		const handle = setInterval(
			() => setNow(Date.now()),
			200,
		)
		return () => clearInterval(handle)
	}, [setNow])
	return now
}

const labels = {
	stopped: 'stop',
	running: 'run',
}

export function Timer() {
	const now = useNow()
	const { toggle, reset, count, next, state } =
		useTimer(now)
	const label = labels[next]
	return (
		<Flex direction="column" gap="6" width="45vh">
			<Flex direction="column" gap="1">
				<Box>{count}</Box>
				<Button onClick={toggle}>{label}</Button>
				<Button onClick={reset}>reset</Button>
			</Flex>
			<Box>
				<Json value={state} />
			</Box>
		</Flex>
	)
}

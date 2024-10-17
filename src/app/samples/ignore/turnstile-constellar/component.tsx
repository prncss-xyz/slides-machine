const turnstileAtom = machineAtom(turnstileMachine(), {
	listener: (message) => {
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
	},
})

function payment(
	_param: { id: string },
	send: (
		e:
			| { amount: number; type: 'success' }
			| { type: 'error' },
	) => void,
) {
	const handle = setTimeout(() => {
		const r = Math.random()
		if (r < 0.5) return send({ type: 'error' })
		const amount = Math.round(Math.random() * 10)
		return send({ amount, type: 'success' })
	}, 1000)
	return () => clearTimeout(handle)
}

function Effects() {
	const [state, send] = useAtom(turnstileAtom)
	useMachineEffects(
		state,
		send,
		useMemo(() => ({ payment }), []),
	)
	return null
}

const payAtom = disabledEventAtom(turnstileAtom, {
	id: '123',
	type: 'payment',
})
function Pay() {
	const [disabled, onClick] = useAtom(payAtom)
	return (
		<button disabled={disabled} onClick={onClick}>
			Pay
		</button>
	)
}

const pushAtom = disabledEventAtom(turnstileAtom, 'push')
function Push() {
	const [disabled, onClick] = useAtom(pushAtom)
	return (
		<button disabled={disabled} onClick={onClick}>
			Push
		</button>
	)
}

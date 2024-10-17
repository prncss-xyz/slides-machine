type State =
	| {
			effects: { payment: { id: string } }
			type: 'payment'
	  }
	| { id: string; type: 'payment' }
	| { type: 'locked' }
	| { type: 'unlocked' }
export type Event =
	| { amount: number; type: 'success' }
	| { id: string; type: 'payment' }
	| { type: 'error' }
	| { type: 'push' }
export type Message =
	| { amount: number; type: 'success' }
	| { type: 'error' }
export type Effects = {
	timeout: { delay: number; event: 'next' }
}

export const turnstileMachine = multiStateMachine<
	Event,
	State,
	object,
	object,
	Message
>()({
	init: { type: 'locked' },
	states: {
		locked: {
			events: {
				payment: ({ id }) => ({
					effects: { payment: { id } },
					type: 'payment',
				}),
			},
		},
		payment: {
			events: {
				error: (_e, _s, emit) => (
					emit({ type: 'error' }), 'locked'
				),
				success: ({ amount }, _s, emit) => (
					emit({ amount, type: 'success' }), 'unlocked'
				),
			},
		},
		unlocked: {
			events: {
				push: 'locked',
			},
		},
	},
})

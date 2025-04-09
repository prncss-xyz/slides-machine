type State =
	| { type: 'locked' }
	| { type: 'payment'; id: string; now: number }
	| { type: 'unlocked' }
export type Event =
	| { type: 'pay'; id: string; now: number }
	| { type: 'success'; amount: number }
	| { type: 'error' }
	| { type: 'push' }
export type Message =
	| { type: 'success'; amount: number }
	| { type: 'error' }

export const turnstileMachine = {
	initial: { type: 'locked' } as State,
	reducer: (
		state: State,
		event: Event,
		emit: (message: Message) => void,
	): State => {
		switch (state.type) {
			case 'locked':
				switch (event.type) {
					case 'pay':
						return {
							type: 'payment',
							id: event.id,
							now: event.now,
						}
					default:
						return state
				}
			case 'payment':
				switch (event.type) {
					case 'success':
						emit({
							type: 'success',
							amount: event.amount,
						})
						return { type: 'unlocked' }
					case 'error':
						emit({ type: 'error' })
						return { type: 'locked' }
					default:
						return state
				}
			case 'unlocked':
				switch (event.type) {
					case 'push':
						return { type: 'locked' }
					default:
						return state
				}
		}
	},
}

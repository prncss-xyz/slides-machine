type State =
	| { type: 'stopped'; elapsed: number }
	| { type: 'running'; since: number }
type Event =
	| { type: 'toggle'; now: number }
	| { type: 'reset'; now: number }

export const timerMachine = {
	initial: {
		type: 'stopped',
		elapsed: 0,
	} as State,
	reducer: function (
		state: State,
		event: Event,
	): State {
		switch (state.type) {
			case 'stopped':
				switch (event.type) {
					case 'toggle':
						return {
							type: 'running',
							since: event.now - state.elapsed,
						}
					case 'reset':
						return { type: 'stopped', elapsed: 0 }
					default:
						return state
				}
			case 'running':
				switch (event.type) {
					case 'toggle':
						return {
							type: 'stopped',
							elapsed: event.now - state.since,
						}
					case 'reset':
						return {
							type: 'running',
							since: event.now,
						}
					default:
						return state
				}
		}
	},
}

type State =
	| { type: 'stopped'; elapsed: number }
	| { type: 'running'; since: number }

export function count(state: State, now: number) {
	switch (state.type) {
		case 'stopped':
			return state.elapsed
		case 'running':
			return now - state.since
	}
}

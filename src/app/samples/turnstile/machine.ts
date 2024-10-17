type State = 'locked' | 'unlocked'
type Event = 'pay' | 'push'

export const turnstileMachine = {
	// typing is important here
	initial: 'locked' as State,
	reducer: function (state: State, event: Event): State {
		switch (state) {
			case 'locked':
				switch (event) {
					case 'pay':
						return 'unlocked'
					default:
						return state
				}
			case 'unlocked':
				switch (event) {
					case 'push':
						return 'locked'
					default:
						return state
				}
		}
	},
}

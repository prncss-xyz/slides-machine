type State = 'loading' | 'success' | 'error'
type Event = 'success' | 'error'

export const loaderMachine = {
	initial: 'loading' as State,
	reducer: function (state: State, event: Event): State {
		switch (state) {
			case 'loading':
				switch (event) {
					case 'success':
						return 'success'
					case 'error':
						return 'error'
					default:
						return state
				}
			case 'success':
				switch (event) {
					default:
						return state
				}
			case 'error':
				switch (event) {
					default:
						return state
				}
		}
	},
}

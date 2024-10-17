type State = 'loading' | 'success' | 'error'
type Event = 'success' | 'error'

export const loaderMachine = {
	initial: 'loading' as State,
	reducer: function (state: State, event: Event): State {
		return state === 'loading' ? event : state
	},
}

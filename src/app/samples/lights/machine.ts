type State = 'green' | 'yellow' | 'red'
type Event = 'next'

export const lightsMachine = {
	initial: 'green' as State,
	reducer: function (state: State, event: Event) {
		switch (state) {
			case 'green':
				switch (event) {
					case 'next':
						return 'yellow'
				}
			case 'yellow':
				switch (event) {
					case 'next':
						return 'red'
				}
			case 'red':
				switch (event) {
					case 'next':
						return 'green'
				}
		}
	},
}

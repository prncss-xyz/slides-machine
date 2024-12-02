import { cva } from '@/generated/styled-system/css'
import { ReactNode } from 'react'

const style = cva({
	base: {
		fontWeight: 'bold',
		fontFamily: 'sans',
		textAlign: 'center',
		mb: '0.4em',
	},
	variants: {
		level: {
			1: {
				fontSize: '9',
				mb: '0.3em',
			},
			2: { fontSize: '8' },
			3: { fontSize: '7' },
			4: { fontSize: '6' },
			5: { fontSize: '5' },
			6: { fontSize: '4' },
		},
	},
})

export function Heading({
	level,
	children,
}: {
	level: 1 | 2 | 3 | 4 | 5 | 6
	children: ReactNode
}) {
	switch (level) {
		case 1:
			return <h1 className={style({ level: 1 })}>{children}</h1>
		case 2:
			return <h2 className={style({ level: 2 })}>{children}</h2>
		case 3:
			return <h3 className={style({ level: 3 })}>{children}</h3>
		case 4:
			return <h4 className={style({ level: 4 })}>{children}</h4>
		case 5:
			return <h5 className={style({ level: 5 })}>{children}</h5>
		case 6:
			return <h6 className={style({ level: 6 })}>{children}</h6>
		default:
			throw new Error(`Invalid level: ${level}`)
	}
}

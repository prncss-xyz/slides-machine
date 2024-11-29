import { ReactNode } from 'react'
import styles from './two-cols.module.css'

export function TwoCols({ children }: { children: ReactNode }) {
	return <div className={styles['two-cols']}>{children}</div>
}

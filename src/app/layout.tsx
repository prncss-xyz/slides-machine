import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import { KeyNav } from '@/slides/keynav'
import { Toaster } from 'react-hot-toast'
import { css } from '@/generated/styled-system/css'
import { Col } from '@/components/layout/col'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'State Machine Slides',
	description: 'by Juliette Lamarche',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body
				className={css({
					backgroundColor: 'gray2',
					fontSize: '6',
					fontFamily: 'sans',
				})}
			>
				<KeyNav>
					<Col>{children}</Col>
					<Toaster />
				</KeyNav>
			</body>
		</html>
	)
}

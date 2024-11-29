import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@radix-ui/themes/styles.css'
import './globals.css'
import { Box, Theme } from '@radix-ui/themes'
import { KeyNav } from '@/slides/keynav'
import { Toaster } from 'react-hot-toast'

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
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Theme>
					<KeyNav>
						<Box px="9" style={{ backgroundColor: 'var(--gray-2)' }}>
							{children}
						</Box>
						<Toaster />
					</KeyNav>
				</Theme>
			</body>
		</html>
	)
}

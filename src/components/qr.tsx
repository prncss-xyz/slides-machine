import { Flex } from '@/generated/styled-system/jsx'
import { A } from './layout/a'
import qrcode from 'qrcode'

export async function QR({ name, href }: { name: string; href: string }) {
	const src = await qrcode.toDataURL(href)
	return (
		<Flex direction="column" gap="1" align="center">
			<a href={href} target="_blank">
				<img
					src={src}
					alt={name}
					style={{
						objectFit: 'cover',
						width: '50vh',
					}}
				/>
			</a>
			<A href={href}>{name}</A>
		</Flex>
	)
}

import { Flex, Link } from '@radix-ui/themes'
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
			<Link href={href}>{name}</Link>
		</Flex>
	)
}

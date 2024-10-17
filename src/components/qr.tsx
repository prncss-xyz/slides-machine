import { Box } from '@radix-ui/themes'
import qrcode from 'qrcode'

const side = 400

// TODO: SVG
export async function QR({ name, href }: { name: string; href: string }) {
	const src = await qrcode.toDataURL(href)
	return (
		<Box py="3">
			<a href={href} target="_blank">
				<img src={src} alt={name} width={side} height={side} />
			</a>
		</Box>
	)
}

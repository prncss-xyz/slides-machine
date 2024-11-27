import { Box } from '@radix-ui/themes'
import qrcode from 'qrcode'

// TODO: SVG
export async function QR({ name, href }: { name: string; href: string }) {
	const src = await qrcode.toDataURL(href)
	return (
		<Box py="3" width='50vh' height='50vh'>
			<a href={href} target="_blank">
				<img
					src={src}
					alt={name}
					style={{
            objectFit: 'cover',
            width: '50vh',
            height: '50vh',
          }}
				/>
			</a>
		</Box>
	)
}

import { Box } from '@radix-ui/themes'
import src from './feedback.png'
import { Img } from './next/img'

export async function Feedback() {
	return (
		<Box py="3" width="50vh" height="50vh">
			<Img
				src={src}
				alt="feedback"
				style={{ objectFit: 'contain' }}
			/>
		</Box>
	)
}

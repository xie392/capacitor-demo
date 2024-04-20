import { Share } from '@capacitor/share'
import { Button, Stack } from '@chakra-ui/react'

const SharePage = () => {
	const share = async () => {
		await Share.share({
			title: '分享标题',
			text: '分享内容',
			url: 'https://capacitorjs.com'
		})
	}

	return (
		<Stack spacing={4} mb="20px">
			<Button colorScheme="blue" onClick={share}>
				分享
			</Button>
		</Stack>
	)
}

export default SharePage

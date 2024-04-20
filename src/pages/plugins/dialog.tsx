import { Button, Stack, Text } from '@chakra-ui/react'
import { Dialog } from '@capacitor/dialog'
import { useState } from 'react'

const DialogPage = () => {
	const [name, setName] = useState<string>('')

	const showAlert = async () => {
		await Dialog.alert({
			title: '对话提示框',
			message: '这是一个对话提示框'
		})
	}

	const showConfirm = async () => {
		const { value } = await Dialog.confirm({
			title: '确认框',
			message: `请确认你的选择`
		})
		console.log('Confirmed:', value)
	}

	const showPrompt = async () => {
		const { value, cancelled } = await Dialog.prompt({
			title: '输入框',
			message: `请输入你的名字`
		})
		setName(value)
		console.log('Name:', value)
		console.log('Cancelled:', cancelled)
	}

	return (
		<>
			<Stack spacing={4}>
				<Button colorScheme="blue" onClick={showAlert}>
					提示框
				</Button>
				<Button colorScheme="blue" onClick={showConfirm}>
					确认框
				</Button>
				<Button colorScheme="blue" onClick={showPrompt}>
					输入框
				</Button>
			</Stack>

			{name && <Text my="20px">你的名字是：{name}</Text>}
		</>
	)
}

export default DialogPage

import { Clipboard } from '@capacitor/clipboard'
import { Button, Input, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

const Clipboardage = () => {
	const [text, setText] = useState<string>('')
	const [value, setValue] = useState<string>('')

	const readFromClipboard = async () => {
		const text = await Clipboard.read()
		setValue(text.value)
	}

	const copyToClipboard = async () => {
		await Clipboard.write({ string: text })
	}

	return (
		<>
			<Input
				placeholder="请输入内容"
				marginBottom="20px"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<Stack spacing={4}>
				<Button colorScheme="blue" onClick={copyToClipboard}>
					复制到剪贴板
				</Button>
				<Button colorScheme="blue" onClick={readFromClipboard}>
					从剪贴板读取
				</Button>
			</Stack>
			<Text marginTop="20px">剪贴板内容：{value}</Text>
		</>
	)
}

export default Clipboardage

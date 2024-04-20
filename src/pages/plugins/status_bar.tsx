import { StatusBar, Style } from '@capacitor/status-bar'
import { Button, Stack } from '@chakra-ui/react'

const StatusBarPage = () => {
	const showStatusBar = async () => {
		await StatusBar.show()
	}

	const hideStatusBar = async () => {
		await StatusBar.hide()
	}

	const setStyle = async () => {
		await StatusBar.setStyle({
			style: Style.Light
		})
	}

	const setBackgroundColor = async () => {
		await StatusBar.setBackgroundColor({
			color: '#000000'
		})
	}

	return (
		<Stack spacing={4} mb="20px">
			<Button colorScheme="blue" onClick={showStatusBar}>
				显示状态栏
			</Button>
			<Button colorScheme="blue" onClick={hideStatusBar}>
				隐藏状态栏
			</Button>
			<Button colorScheme="blue" onClick={setStyle}>
				设置样式
			</Button>
			<Button colorScheme="blue" onClick={setBackgroundColor}>
				设置背景颜色
			</Button>
		</Stack>
	)
}

export default StatusBarPage

import { Haptics, ImpactStyle } from '@capacitor/haptics'
import { Button, Stack } from '@chakra-ui/react'

const hapticsImpactMedium = async () => {
	await Haptics.impact({ style: ImpactStyle.Medium })
}

const hapticsImpactLight = async () => {
	await Haptics.impact({ style: ImpactStyle.Light })
}

const hapticsVibrate = async () => {
	await Haptics.vibrate()
}

const hapticsSelectionStart = async () => {
	await Haptics.selectionStart()
}

const hapticsSelectionChanged = async () => {
	await Haptics.selectionChanged()
}

const hapticsSelectionEnd = async () => {
	await Haptics.selectionEnd()
}

const HapticsPage = () => {
	return (
		<>
			<Stack spacing={4}>
				<Button colorScheme="blue" onClick={hapticsImpactMedium}>
					中等冲击
				</Button>
				<Button colorScheme="blue" onClick={hapticsImpactLight}>
					轻微冲击
				</Button>
				<Button colorScheme="blue" onClick={hapticsVibrate}>
					震动
				</Button>
				<Button colorScheme="blue" onClick={hapticsSelectionStart}>
					选择开始
				</Button>
				<Button colorScheme="blue" onClick={hapticsSelectionChanged}>
					选择改变
				</Button>
				<Button colorScheme="blue" onClick={hapticsSelectionEnd}>
					选择结束
				</Button>
			</Stack>
		</>
	)
}

export default HapticsPage

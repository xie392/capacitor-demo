import { Device, DeviceInfo, BatteryInfo } from '@capacitor/device'
import { Button, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Highlight from '@/components/highlight'

const DevicePage = () => {
	const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>()
	const [batteryInfo, setBatteryInfo] = useState<BatteryInfo>()

	const logDeviceInfo = async () => {
		const info = await Device.getInfo()
		setDeviceInfo(info)
	}

	const logBatteryInfo = async () => {
		const info = await Device.getBatteryInfo()
		setBatteryInfo(info)
	}

	return (
		<>
			<Stack spacing={4}>
				<Button colorScheme="blue" onClick={logDeviceInfo}>
					获取设备信息
				</Button>
				<Button colorScheme="blue" onClick={logBatteryInfo}>
					获取电池信息
				</Button>
			</Stack>

			{deviceInfo && (
				<>
					<Text my="20px">电池信息：</Text>
					<Highlight language="json">{JSON.stringify(deviceInfo, null, 2)}</Highlight>
				</>
			)}

			{batteryInfo && (
				<>
					<Text my="20px">电池信息：</Text>
					<Highlight language="json">{JSON.stringify(batteryInfo, null, 2)}</Highlight>
				</>
			)}
		</>
	)
}

export default DevicePage

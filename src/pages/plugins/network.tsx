import { Network, ConnectionStatus } from '@capacitor/network'
import { Button, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

const NetworkPage = () => {
	const [networkStatus, setNetworkStatus] = useState<ConnectionStatus>()

	const getNetworkStatus = async () => {
		const status = await Network.getStatus()
		console.log('Network status:', status)
		setNetworkStatus(status)
	}

	return (
		<>
			<Stack spacing={4} mb="20px">
				<Button colorScheme="blue" onClick={getNetworkStatus}>
					获取网络状态
				</Button>
			</Stack>

			{networkStatus && (
				<>
					<Text>网络是否在线：{networkStatus.connected ? '是' : '否'}</Text>
					<Text>网络状态：{networkStatus.connectionType}</Text>
				</>
			)}
		</>
	)
}

export default NetworkPage

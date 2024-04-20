import { Geolocation, Position } from '@capacitor/geolocation'
import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

const GeolocationPage = () => {
	const [currentPosition, setCurrentPosition] = useState<Position>()

	const printCurrentPosition = async () => {
		const coordinates = await Geolocation.getCurrentPosition()
		console.log('Current position:', coordinates)
		setCurrentPosition(coordinates)
	}

	return (
		<>
			<Stack spacing={4}>
				<Button colorScheme="blue" onClick={printCurrentPosition}>
					获取当前位置
				</Button>
			</Stack>

			{currentPosition && (
				<Box p={2} bg="gray.200">
					<Text>纬度：{currentPosition.coords.latitude}</Text>
					<Text>经度：{currentPosition.coords.longitude}</Text>
					<Text>海拔：{currentPosition.coords.altitude}</Text>
					<Text>精度：{currentPosition.coords.accuracy}</Text>
					<Text>海拔精度：{currentPosition.coords.altitudeAccuracy}</Text>
					<Text>方向：{currentPosition.coords.heading}</Text>
					<Text>速度：{currentPosition.coords.speed}</Text>
				</Box>
			)}
		</>
	)
}

export default GeolocationPage

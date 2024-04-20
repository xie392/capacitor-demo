import { Preferences } from '@capacitor/preferences'
import { Button, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

const PreferencesPage = () => {
	const [preferences, setPreferences] = useState<string | null>(null)

	const setPreference = async () => {
		await Preferences.set({
			key: 'name',
			value: 'Capacitor'
		})
	}

	const getPreference = async () => {
		const { value } = await Preferences.get({
			key: 'name'
		})
		console.log('Name:', value)
		setPreferences(value)
	}

	const removePreference = async () => {
		await Preferences.remove({
			key: 'name'
		})
		setPreferences(null)
	}

	return (
		<>
			<Stack spacing={4} mb="20px">
				<Button colorScheme="blue" onClick={setPreference}>
					设置偏好
				</Button>
				<Button colorScheme="blue" onClick={getPreference}>
					获取偏好
				</Button>
				<Button colorScheme="blue" onClick={removePreference}>
					删除偏好
				</Button>
			</Stack>

			{preferences && <Text my="20px">你的名字是：{preferences}</Text>}
		</>
	)
}

export default PreferencesPage

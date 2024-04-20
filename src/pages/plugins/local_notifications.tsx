import { LocalNotifications, PendingLocalNotificationSchema } from '@capacitor/local-notifications'
import { Box, Button, Stack } from '@chakra-ui/react'
import { useState } from 'react'

const LocalNotificationsPage = () => {
	const scheduleNotification = async () => {
		try {
			await LocalNotifications.schedule({
				notifications: [
					{
						title: '通知',
						body: '这是一个通知!',
						id: 1,
						// 将此通知安排在稍后时间。3 秒后显示通知
						schedule: { at: new Date(Date.now() + 1000 * 3) }
					}
				]
			})
		} catch (error) {
			console.error('Failed to schedule notification', error)
		}
	}

	const [notifications, setNotifications] = useState<PendingLocalNotificationSchema[]>([])

	// 获取屏幕上的通知
	const getNotifications = async () => {
		const notifications = await LocalNotifications.getPending()
		setNotifications(notifications.notifications)
	}

	return (
		<>
			<Stack spacing={4}>
				<Button colorScheme="blue" onClick={scheduleNotification}>
					日程通知
				</Button>
				<Button colorScheme="blue" onClick={getNotifications}>
					获取通知
				</Button>
			</Stack>

			{notifications.map((notification) => (
				<Box key={notification.id} p={2} bg="gray.200">
					<Box>标题：{notification.title}</Box>
					<Box>内容：{notification.body}</Box>
					<Box>ID：{notification.id}</Box>
					<Box>通知时间：{new Date(notification.schedule?.at as Date).toLocaleString()}</Box>

					<Button
						colorScheme="blue"
						onClick={() => LocalNotifications.cancel({ notifications: [notification] })}
					>
						取消通知
					</Button>
				</Box>
			))}
		</>
	)
}

export default LocalNotificationsPage

import { Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const routes = [
	{ name: '相机', path: '/camera' },
	{ name: '剪贴板', path: '/clipboard' },
	{ name: '设备', path: '/device' },
	{ name: '对话框', path: '/dialog' },
	{ name: '文件', path: '/filesystem' },
	{ name: '地理位置', path: '/geolocation' },
	{ name: '震动', path: '/haptics' },
	{ name: '本地通知', path: '/local_notifications' },
	{ name: '网络', path: '/network' },
	{ name: '偏好设置', path: '/preferences' },
	{ name: '分享', path: '/share' },
	{ name: '状态栏', path: '/status_bar' }
]

const Nav = () => {
	const location = useLocation()
	const [currentPath, setCurrentPath] = useState<string>('/')

	useEffect(() => {
		setCurrentPath(location.pathname.split('/plugins')[1] || '/')
	}, [location])

	return (
		<Flex as="nav" align="center" gap={'1rem'} wrap="wrap" padding="1.5rem" bg="gray.500" color="white">
			{routes.map((route, index) => (
				<Link
					key={index}
					to={'/plugins' + route.path}
					className={currentPath === route.path ? 'text-green-500' : ''}
				>
					<Text>{route.name}</Text>
				</Link>
			))}
		</Flex>
	)
}

export default Nav

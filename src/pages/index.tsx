import { Container, Divider, Flex, Heading, Text, Highlight, Button, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const IndexPage = () => {
	const navigate = useNavigate()

	return (
		<Flex minH="100vh" justifyContent="center" pt="2rem">
			<Container>
				<Heading marginBottom="6px">Capacitor Demo</Heading>
				<Divider marginBottom="15px" />
				<Text fontSize="sm" lineHeight="1.8">
					<Highlight
						query={['Capacitor', 'React', 'Chakra UI', 'vite-plugin-pages']}
						styles={{ px: '1', py: '1', bg: 'orange.100' }}
					>
						本项目基于 React + Chakra UI + Capacitor 开发，并使用了 vite-plugin-pages 生成约定式路由。
					</Highlight>
				</Text>
				<Stack direction="row" spacing={2}>
					<Button
						variant="outline"
						colorScheme="blue"
						onClick={() => (window.location.href = 'https://github.com/xie392/capacitor-demo')}
						marginTop="30px"
					>
						查看源码
					</Button>
					<Button colorScheme="blue" onClick={() => navigate('/plugins')} marginTop="30px">
						查看演示
					</Button>
				</Stack>
			</Container>
		</Flex>
	)
}

export default IndexPage

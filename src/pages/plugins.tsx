import { Outlet } from 'react-router-dom'
import Nav from '@/components/nav'
import { Box, Flex } from '@chakra-ui/react'
import Header from '@/components/header'

const Plugin = () => {
	return (
		<Flex minH="100vh" flexDir="column">
			<Header />
			<Nav />
			<Box flexGrow={1} overflowY="auto" p="1rem">
				<Outlet />
			</Box>
		</Flex>
	)
}

export default Plugin

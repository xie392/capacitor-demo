import { Box, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowBackIcon } from '@chakra-ui/icons'

const Header = () => {
	return (
		<Flex minWidth="max-content" alignItems="center" gap="2" h="64px" bg="gray.100">
			<Box p={2}>
				<Link to="/" className="flex items-center text-gray-500 hover:text-gray-900">
					<ArrowBackIcon w={6} h={6} />
					<Heading size="sm" ml={2}>
						Back
					</Heading>
				</Link>
			</Box>
		</Flex>
	)
}

export default Header

import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import Loading from '@/components/loading'
import { ChakraProvider } from '@chakra-ui/react'

/**
 * @description 全局路由配置，每个页面都会加载此组件。可以用于全局的路由拦截，比如登录拦截等
 * @returns
 */
const App = () => {
	return (
		<ChakraProvider>
			<Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
		</ChakraProvider>
	)
}

export default App

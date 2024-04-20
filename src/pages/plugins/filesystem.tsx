import { Filesystem, Directory, Encoding, FileInfo } from '@capacitor/filesystem'
import { Box, Button, Stack, Text, Image } from '@chakra-ui/react'
import { useState } from 'react'
import TestImage from '@/assets/test.jpeg'

const FilesystemPage = () => {
	const [fileInfo, setFileInfo] = useState<FileInfo[]>([])
	const [fileUrl, setFileUrl] = useState<string>('')
	const [path, setPath] = useState<string>('')

	const readSecretDir = async () => {
		const contents = await Filesystem.readdir({
			path: '/',
			directory: Directory.Documents
		})
		setFileInfo(contents.files)
	}

	const writeSecretFile = async () => {
		const response = await fetch(TestImage)
		const blob = await response.blob()
		const reader = new FileReader()
		reader.readAsDataURL(blob)
		reader.onloadend = async () => {
			if (reader.result) {
				await Filesystem.writeFile({
					path: 'images/test.jpeg',
					data: reader.result as string,
					directory: Directory.Data,
					encoding: Encoding.UTF8
				})
			}
		}
	}

	const readSecretFile = async () => {
		const file = await Filesystem.readFile({
			path: 'images/test.jpeg',
			directory: Directory.Data
		})
		setFileUrl(file.data as string)
	}

	const deleteSecretFile = async () => {
		await Filesystem.deleteFile({
			path: 'images/test.jpeg',
			directory: Directory.Data
		})
	}

	const readFilePath = async () => {
		const path = await Filesystem.readFile({
			path: 'images/test.jpeg',
			directory: Directory.Data,
			encoding: Encoding.UTF8
		})
		setPath(path.data as string)
	}

	return (
		<>
			<Stack spacing={4}>
				<Button colorScheme="blue" onClick={writeSecretFile}>
					写入文件
				</Button>
				<Button colorScheme="blue" onClick={readSecretFile}>
					读取文件
				</Button>
				<Button colorScheme="blue" onClick={deleteSecretFile}>
					删除文件
				</Button>
				<Button colorScheme="blue" onClick={readFilePath}>
					读取文件路径
				</Button>
				<Button colorScheme="blue" onClick={readSecretDir}>
					读取当前目录
				</Button>
			</Stack>

			{/* 展示目录信息 */}
			{fileInfo.map((file, index) => (
				<Box key={index} p={2} bg="gray.200">
					<Text my="20px">文件名：{file.name}</Text>
					<Text my="20px">文件地址：{file.uri}</Text>
					<Text my="20px">文件大小：{file.size}</Text>
					<Text my="20px">文件类型：{file.type}</Text>
					<Text my="20px">创建时间：{new Date(file.mtime).toLocaleString()} </Text>
					<Text my="20px">上一次修改时间：{new Date(file.mtime).toLocaleString()} </Text>
				</Box>
			))}

			{/* 读取到的文件 */}
			{fileUrl && (
				<Box py={2}>
					<Image src={fileUrl} alt="Test Image" boxSize="200px" />
				</Box>
			)}

			{/* 读取到的文件路径 */}
			{path && (
				<Box p={2} bg="gray.200">
					<Text>文件路径：{path}</Text>
				</Box>
			)}
		</>
	)
}

export default FilesystemPage

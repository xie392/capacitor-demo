import { Camera, CameraResultType } from '@capacitor/camera'
import { Button, Image } from '@chakra-ui/react'
import { useState } from 'react'

const CameraPage = () => {
	const [imageUrl, setImageUrl] = useState<string | undefined>()

	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Uri
		})
		// image.webPath 将包含可以设置为图像 src 的路径。
		// 您可以使用 image.path 访问原始文件，可以是
		// 传递给Filesystem API来读取图像的原始数据，
		// 如果需要（或将 resultType: CameraResultType.Base64 传递给 getPhoto）
		setImageUrl(image.webPath)
	}

	return (
		<>
			<Button onClick={takePicture} colorScheme="blue">
				打开相机
			</Button>
			{imageUrl && <Image src={imageUrl} boxSize="auto" marginTop="10px" alt="Picture" />}
		</>
	)
}

export default CameraPage

import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
	appId: 'com.example.app',
	appName: 'capacitor-demo',
	webDir: 'dist',
	plugins: {
		LocalNotifications: {
			smallIcon: 'ic_stat_icon_config_sample',
			iconColor: '#488AFF',
			sound: 'beep.wav'
		}
	},
	ios: {
		preferredContentMode: 'mobile'
	}
}

export default config

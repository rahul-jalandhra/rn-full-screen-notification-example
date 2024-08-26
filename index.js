/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import { navigationFromNotification } from './src/notification/notificationNavigation';

async function onMessageReceived(message) {
    console.log('remote message at onMessageReceived:', message);
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

notifee.onBackgroundEvent(async (message) => {
    navigationFromNotification(message)
});

AppRegistry.registerComponent(appName, () => App);

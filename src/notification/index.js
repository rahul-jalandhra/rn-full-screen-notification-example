import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid, Platform } from 'react-native';

//Requsting permission for both IOS and Android ---->
export const requestUserPermission = async () => {
    if (Platform.OS === 'android') {
        //Request Android permission (For API level 33+, for 32 or below is not required)
        const res = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
    } else if (Platform.OS === 'ios') {
        //Request iOS permission
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    }
}

export const getFCMToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
        console.log('Your Firebase Token is:', fcmToken);
    } else {
        console.log('Failed', 'No token received');
    }
};
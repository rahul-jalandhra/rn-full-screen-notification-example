import { navigate } from "../../RootNavigation";

export const navigationFromNotification = async (remoteMessage) => {
    const { type, detail } = remoteMessage;
    const { data } = detail?.notification;
    console.log("data")
    setTimeout(() => {
        navigate('Message', { ...data,id:detail?.notification?.id });
    }, 500);
};
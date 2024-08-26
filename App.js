import React, { useEffect } from 'react';
import { getFCMToken, requestUserPermission } from './src/notification';
import notifee, { EventType } from '@notifee/react-native';
import NavigationStack from './src/stacks';
import { navigationFromNotification } from './src/notification/notificationNavigation';

function App() {

  useEffect(() => {
    requestUserPermission();
    getFCMToken();
    const unsubscribe = notifee.onForegroundEvent(async(message) => {
      console.log("Foreground Notification:", message);
      if (message?.type === 3) {
        navigationFromNotification(message);
      }
    });

    return () => unsubscribe();
  }, []);


  return(
    <NavigationStack/>
  )
}

export default App;
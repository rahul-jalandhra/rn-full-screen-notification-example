import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import notifee, { TriggerType, AndroidImportance, AndroidCategory, AndroidVisibility } from '@notifee/react-native';

function Home() {
  const scheduleNotification = async (minutes = 1) => {
    const date = new Date(Date.now());
    date.setMinutes(date.getMinutes() + minutes);

    // Create a time-based trigger
    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at the scheduled time
    };

    const channelId = await notifee.createChannel({
      id: 'reminder',
      name: 'Reminder',
      visibility: AndroidVisibility.PUBLIC,
      importance: AndroidImportance.HIGH,
      vibration: true,
      description: 'Reminder Notifications',
    });

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Scheduled Notification',
        body: `Notification scheduled in ${minutes} minutes`,
        data:{
          name:'Rahul',
          mobile:'7015591256',
          email:'jalandhra91256@gmail.com',
          url:"https://media.licdn.com/dms/image/v2/D5603AQE3aH44kA7Aqw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709268621253?e=1730332800&v=beta&t=DhuBcNHeRgs3pkdJOwd6O5O8pOPReAvnSEMJUKrrR68"
        },
        android: {
          channelId: channelId,
          category:AndroidCategory.MESSAGE,
          fullScreenAction: {
            id: 'default',
            launchActivity: 'default',
          },
        },
      },
      trigger,
    );
  };
  
  return (
    <SafeAreaView>
      <View style={{marginBottom:10}}>
      <Button title="Schedule in 1 minutes" onPress={() => scheduleNotification(1)} />
      </View>
      <Button title="Schedule in 5 minutes" onPress={() => scheduleNotification(5)} /> 
    </SafeAreaView>
  )
}

export default Home;

// {"notification": {"android": {"asForegroundService": false, "autoCancel": true, "badgeIconType": 2, "category": "msg", "channelId": "reminder", "chronometerDirection": "up", "circularLargeIcon": false, "colorized": false, "defaults": [Array], "fullScreenAction": [Object], "groupAlertBehavior": 0, "groupSummary": false, "importance": 3, "lightUpScreen": false, "localOnly": false, "loopSound": false, "ongoing": false, "onlyAlertOnce": false, "showChronometer": false, "showTimestamp": false, "smallIcon": "ic_launcher", "visibility": 0}, "body": "Notification scheduled in 1 minutes", "data": {}, "id": "eqatqw4E25aDSET0wp5k", "title": "Scheduled Notification"}}
import React, { useEffect } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import notifee, { TriggerType, AndroidImportance, AndroidCategory, AndroidVisibility } from '@notifee/react-native';
function Message({ navigation, route }) {
  const data = route.params;
  const cancelNotification=async()=>{
    await notifee.cancelAllNotifications();
  }
  useEffect(()=>{
    cancelNotification();
  },[]);
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Image source={{ uri: data?.url }} style={styles.image} />
        <Text style={styles.name}>{data?.name}</Text>
        <Text>{data?.email}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Message;

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingTop: 15
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 50,
    backgroundColor: 'lightgray',
    marginVertical: 15
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  }
})
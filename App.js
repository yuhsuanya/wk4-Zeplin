import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.p1}>110619044</Text>
      <Text style={styles.p2}>楊育瑄</Text>

   
      <View style={styles.square}></View>
      <View style={styles.square1}></View>
      <View style={styles.square2}></View>
      <View style={styles.square3}></View>
      <View style={styles.square4}></View>
      <View style={styles.square5}></View>
   </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB5B5',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'微軟正黑體',
    
  },
  p1:{
    fontSize:18,
    color:'#666666',
  },
  p2:{
  fontSize:20,
  top:10,
  color:'#666666',
  },
  square:{
   width: 30,
   height: 30,
   bottom:-80,
   backgroundColor:'#FF8888',
  },
  square1:{
  width: 30,
  height: 30,
  bottom:-40,
  right:20,
  backgroundColor:'#FF8888',
  },
  square2:{
  width: 30,
  height: 30,
  bottom:-0,
  right:40,
  backgroundColor:'#FF8888',
  },
  square3:{
  width: 30,
  height: 30,
  bottom:20,
  right:-20,
  backgroundColor:'#FF8888',
  },
  square4:{
  width: 30,
  height: 30,
  bottom:60,
  right:-40,
  backgroundColor:'#FF8888',
  },
  square5:{
    width: 30,
    height: 30,
    bottom:40,
    
    backgroundColor:'#FF8888',
    },
});

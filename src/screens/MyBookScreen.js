import React from "react";
import { View, FlatList,StyleSheet,Image,Text} from "react-native";
import MyBookDetail from "../components/MyBookDetail";
import mybookData from "../json/mybook.json";

const MyBookScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
      data={mybookData.mybookList}
      renderItem={({ item }) => 
      <MyBookDetail 
        mybook={item}       
        navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />

      
    </View>
  );
};


export default MyBookScreen;

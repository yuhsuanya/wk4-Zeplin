import React from "react";
import { View, FlatList,StyleSheet,Image,Text} from "react-native";
import Header from "../components/Header";
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
      data={albumData.albumList}
      renderItem={({ item }) => 
      <AlbumDetail 
        album={item}       
        navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />
      <View style={styles.btn}>
         <View style={styles.btnbottom}>
            <Image
                source={{uri:"https://imgur.com/U7kh7ul.png"}}
                style={styles.home}
            />
            <Text style={styles.text_home}>Home</Text>
         </View>
         <View style={styles.btnbottom}>
            <Image
                source={{uri:"https://imgur.com/u0Arnvp.png"}}
                style={styles.mybook}
            />
            <Text style={styles.text_mybook}>My Book</Text>
         </View>
         <View style={styles.btnbottom}>
            <Image
                source={{uri:"https://imgur.com/xy50eSB.png"}}
                style={styles.favorites}
            />
            <Text style={styles.text_favorites}>Favorites</Text>
         </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  btnbottom:{
    flexDirection:"column",
    backgroundColor:'#FBFCFC',
    height:60,
    width:140,
    padding:12,
  },
btn:{
  flexDirection:"row",
  justifyContent:"flex-start"
},
home:{
  width:25,
  height:22,
  marginLeft:45,

},
mybook:{
  width:25,
  height:22,
  marginLeft:40,
},
favorites:{
  width:25,
  height:22,
  marginLeft:25,
},
text_home:{
  color:'#818181',
  fontSize:14,
  marginLeft:37,
},
text_mybook:{
  color:'#00b49f',
  fontSize:16,
  marginLeft:17,
  fontWeight:"bold",
},
text_favorites:{
  color:'#818181',
  fontSize:14,
  marginLeft:10,

}

});
export default AlbumScreen;

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";

const MyBookDetail = ({ mybook, navigation }) => {
   return (
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <View style={styles.img}>
            <Image
             style={styles.thumbnailStyle}
             source={{uri: mybook.image}}
            />
          </View>
          
          <View style={styles.headerContentStyle}>
            <Text style={{color:"#2e2e2e",fontSize:22,fontWeight:"bold"}}>{mybook.title}</Text>
            <Text style={{color:"#717171",fontSize:18}}>{mybook.author}</Text>
            <Text style={{color:"#b1b1b1",fontSize:12,width:194,height:30,marginTop:-5,fontWeight:"regular"}}>{mybook.description}</Text>
            <Image
            style={{width:194,height:3,marginTop:-12}}
            source={{uri: mybook.loading}}/>
             <Text style={{color:"#b1b1b1",fontSize:16,marginTop:-5}}>{mybook.completed}</Text>
            <Text style={{color:"#ff6767",fontSize:16,fontWeight:"bold",marginTop:-25}}>{mybook.completed_r}</Text>
          </View>
        </View>
      </View>
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom:10
  },
  thumbnailStyle: {
    height: 140,
    width: 93,
    marginLeft:18,
    marginTop:15,
    
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 28
  },
  cardContainerStyle: {
    backgroundColor:"#FFF",
    flexDirection:"column",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#FFF",
    shadowColor: "#FFF",
    borderColor:"#f8f8f8"

  },
  cardSectionStyle: {
    padding: 0,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1,
    height:170
  },
  imageStyle: {
    height: 350,//image size
    width: null
  },
  Content1Style:{
    flexDirection:"row",
    backgroundColor:"#FFF",
    paddingLeft: 20,
    paddingTop:3,
    paddingBottom:10,

  },
  
});

export default MyBookDetail;

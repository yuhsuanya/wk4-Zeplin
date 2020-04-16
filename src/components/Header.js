import React from "react";
import { StyleSheet,View } from "react-native";

const Header = (props) => {
  return (
      <View style={styles.headerStyle}>
       <Image
        style={styles.hl}
        source={{
          uri: album.share1_image
        }}
       />
      </View>
      
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#00b49f",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    paddingTop: 60,
    shadowColor: "#00b49f",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2
  },
  hl: {
    height: 25,
    width: 25,
    marginLeft: 200,
    marginTop: 18
  }

});

export default Header;

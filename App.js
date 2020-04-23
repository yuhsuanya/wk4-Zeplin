import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image,StyleSheet,Text } from 'react-native';
import {   
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyBookScreen from './src/screens/MyBookScreen';
import AboutusScreen from './src/screens/AboutusScreen';
import FavoritesScreen from'./src/screens/FavoritesScreen';
import HomeScreen from'./src/screens/FavoritesScreen';
import mybookData from "./src/json/mybook.json";
import homedetail from "./src/json/home.json";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Bar ({navigation,name}) {
  return(
    <Tab.Navigator initialRouteName = 'My Book'
      tabBarOptions = {{
        activeTintColor: '#00b49f',
        inactiveTintColor: '#818181',
        style: {
          height: 70 ,
        }
      }}>
        <Tab.Screen name = "Home"
        component = {HomeScreen}
        options = {{
          tabBarLabel: "Home",
          tabBarIcon: ({focused}) => {
            if(focused ){
              return(
              <Image style = {{width:30,height:30}} source = {require('./assets/icon_bottomnav_home_seleced.png')}/>)}
              else{
                return(
             <Image style = {{width:30,height:30}} source = {require('./assets/icon_bottomnav_home.png')}/>)}
            }
        }}/>

        <Tab.Screen name = "MyBook"
        component = {MyBookScreen}
        options = {{
          //                                      
            // headerTintColor: '#FFF',
            // headerTitleStyle: {
            //   fontWeight: '600',
            //   fontSize: 20,
            // }, 
          tabBarLabel: "MyBook",
          tabBarIcon: ({focused}) => {
            if(focused){
              return(
                <Image style = {{width:30,height:30}} source = {require('./assets/icon_bottomnav_mybook_selected.png')}/>)}
                else{
                  return(
             <Image style = {{width:30,height:30}} source = {require('./assets/icon_bottomnav_mybook.png')}/>)}
          }
        }}/>
        <Tab.Screen name = "Favorites"
        component = {FavoritesScreen}
        options = {{
          tabBarLabel: "Favorites",
          tabBarIcon: ({focused}) => {
            if(focused){
              return(
              <Image style = {{width:30,height:30}} source = {require('./assets/icon_bottomnav_favorites_seleced.png')}/>)}
              else {
                return( <Image style = {{width:30,height:30}} source = {require('./assets/icon_bottomnav_favorites.png')}/>)}
          }
        }}/>
      </Tab.Navigator>
  );
}

function StackScreen({navigation,name}) {
  return(
    <Stack.Navigator initinalRouteName = 'My Book'>
      <Stack.Screen
        name = "Book"
        component = {Bar}
        options = {() => ({
          title:'My Book',
          headerTintColor: "#fff",
          headerStyle:{backgroundColor:"#00b49f"},
          headerLeft:() => {
            return(
              <TouchableOpacity onPress= {() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image style = {styles.bar} source = {require('./assets/btn_navbar_mobile.png')}/>
              </TouchableOpacity>
            )},
          headerRight: () =>{
            return(
              <TouchableOpacity onPress = {() =>alert('This is a button!')}>
              <Image style = {styles.search} source = {require('./assets/btn_search.png')}/>)}
              </TouchableOpacity>
            )}
        })} />
    </Stack.Navigator>
  );
}

const MyBookStack = (navigation,name) => {
  return (
    <Stack.Navigator initialRouteName = 'My Book'>
      <Stack.Screen 
        name = "Book" 
        component = {Bar}                                              
        options = {() => ({
          title: 'My Book',
          headerTintColor: "#fff",
          headerStyle: {backgroundColor: "#00b49f"},
          headerLeft: () => {
            return(
              <TouchableOpacity onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image style = {styles.bar} source = {require('./assets/btn_navbar_mobile.png')}/>          
              </TouchableOpacity>
          )},
          headerRight: () => {
            return(
              <TouchableOpacity onPress = {() =>alert('This is a button!')}> 
              <Image style = {styles.search} source = {require('./assets/btn_search.png')}/>       
              </TouchableOpacity>  
          )}      
        })} />
      </Stack.Navigator>
  );    
}

// const MyBookStack = (navigation,name) => {
//   return (
//       <Stack.Navigator initialRouteName = 'My Book'>
//         <Stack.Screen 
//           name="My Book" 
//           component={Bar} 
//           options={{
//             title: 'My Book',
//             headerTintColor: "#fff",
//             headerStyle: {
//               fontWeight: 'bold',
//               fontSize: 20,
//               color:"#fff"
//             }, 
//             headerLeft: () =>(
//               <View style={{marginLeft:20}}>
//                 <Ionicons
//                   name={'ios-menu'}
//                   size={30}
//                   onPress={() => navigation.openDrawer()}
//                   />
//               </View>
//             ),
//           }}
//         />
//       </Stack.Navigator>
//   );    
// }

const  HomeStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Bar}
          options={{
            title:'My Book',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
              color:"#fff"
            }, 
            headerStyle: {
              backgroundColor:'#00b49f',
              height:85,
            },
            headerLeft: () =>(
              <View style={{marginLeft:20}}>
              <Ionicons
                name={'ios-menu'}
                size={30}
                onPress={() =>navigation.openDrawer()}
                />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
  );
}

const SettingsStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Settings" 
          component={Bar} 
          options={{
            title: 'Settings',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),              
          }}
        />  
      </Stack.Navigator>
  );
}

const AboutusStack  = ({navigation}) => {
  return (
      <Stack.Navigator >
        <Stack.Screen 
          name="AboutusScreen" 
          component={Bar} 
          options={{
            title: bookData.Title5,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
            }, 
            headerStyle: {
              backgroundColor:'#00b49f',
              height:85,
            },
            
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),  
            headerRight: () => (
              <View style={{marginRight: 20}}>
              <Ionicons 
                name={'ios-search'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),             
          }}
        />         
      </Stack.Navigator>
  );
}

const FavoritesStack  = ({navigation}) => {
  return (
      <Stack.Navigator >
        <Stack.Screen 
          name="FavoritesScreen" 
          component={Bar} 
          options={{
            title: bookData.Title3,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
            }, 
            headerStyle: {
              backgroundColor:'#00b49f',
              height:85,
            },
            
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),  
            headerRight: () => (
              <View style={{marginRight: 20}}>
              <Ionicons 
                name={'ios-search'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),             
          }}
        />         
      </Stack.Navigator>
  );
}


const CustomDrawerContent = ({ ...rest }) => {
  return (
    <DrawerContentScrollView style={{marginTop: -48}}{...rest}>

     <View style={styles.UserBox}>
      <Image
          source={require('./assets/img_user_photo.png')}
          style = {{height:80,width:80,marginTop:70,marginLeft:20}}
        />
        <View style={styles.Userstyle}>
          <Text style={styles.Usertext}>GamexHCl</Text>
          <Text style={styles.UsertextEmail}>gdlab2017@gmail.com</Text>
        </View>

     </View>
      
    <DrawerItemList {...rest} />


    </DrawerContentScrollView>
  );
}


const App = () => {
  const ref = React.useRef(null);
  return (
    <NavigationContainer ref = {ref} >
      <Drawer.Navigator initialRouteName = 'My Book'
        drawerStyle={{ backgroundColor: '#ebebeb',width: 304}}
        drawerContentOptions={{
        activeBackgroundColor: '#00b49f',
        activeTintColor:'#fff',
        itemStyle: { marginLeft: 0, marginRight: 0,height:54,justifyContent: 'center' },
        labelStyle: { fontSize: 20 ,marginLeft: 10},
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen 
      name="Home" 
      component={HomeStack} 
      options={
        {
          drawerLabel: 'Home', 
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/icon_bottomnav_home.png')}
              style={{width:24, height: 24, tintColor: tintColor,marginLeft: 15 }}
            />
          ),      
      }
    }
    />

     
    <Drawer.Screen 
      name="MyBook" 
      component={MyBookStack} 
      options={
        {
          drawerLabel: 'My Book', 
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/icon_bottomnav_mybook.png')}
              style={{width:24, height: 24, tintColor: tintColor,marginLeft: 15 }}
            />
          ),      
      }
    }
    />    
    <Drawer.Screen 
      name="Favorites" 
      component={FavoritesStack} 
      options={
        {
          drawerLabel: 'Favorites',
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/icon_bottomnav_favorites.png')}
              style={{width:24, height: 24, tintColor: tintColor,marginLeft: 15 }}
            />
          ),            
        }
      }
    />
    <Drawer.Screen 
      name="Settings" 
      component={SettingsStack} 
      options={
        {
          drawerLabel: 'Settings',
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/icon_drawer_setting.png')}
              style={{width:24, height: 24, tintColor: tintColor,marginLeft: 15 }}
            />
          ),            
        }
      }
    />        
    <Drawer.Screen 
      name="Aboutus" 
      component={AboutusStack} 
      options={
        {
          drawerLabel: 'About us',
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/icon_drawer_aboutus.png')}
              style={{width:24, height: 24, tintColor: tintColor,marginLeft: 15 }}
            />
          ),            
        }
      }
    />                
  </Drawer.Navigator>

  </NavigationContainer>

    
  );
}
    


const styles = StyleSheet.create({
  UserBox:{
    backgroundColor:"#00b49f",
    height:200,
    
  },
 
  Userstyle:{
    flexDirection:"column",
    marginLeft:20,
    marginTop:5
  },
  Usertext:{
    color:"white",
    fontSize:14,
    marginRight:120,
    fontWeight:'bold'
  },
  UsertextEmail:{
    color:"white",
    fontSize:14,
    marginRight:120,
    
  },

});

export default App;
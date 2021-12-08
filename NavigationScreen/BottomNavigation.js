import React from 'react';
import {View, Text, ScrollView,Image} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../Screens/HomeScreen';
import CourseScreen from '../Screens/CourseScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SettingScreen from '../Screens/SettingScreen';
import BlogScreen from '../Screens/BlogScreen';
import {NavigationContainer} from '@react-navigation/native';

const BottomNavigation = () => {
  const Bottom = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <Bottom.Navigator
       
       initialRouteName="Home"
       sceneAnimationEnabled={true}
       screenOptions={{
         headerShown: false,
       }}
       // eslint-disable-next-line react-native/no-inline-styles
       barStyle={{
         backgroundColor: '#fff',
         borderTopColor: '#000',
         height: 55,
       }}>
        <Bottom.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: (
              <Text style={{ fontFamily: 'BlissPro-Bold' }}>
               Home
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <Image style={{ height: 25, width: 25 }} source={{uri:"https://i.pinimg.com/originals/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg"}} />
            ),
          }}
        />
        <Bottom.Screen
         name="CourseStack"
          component={CourseStack}
          options={{
            headerShown:true,
            tabBarLabel: (
              <Text style={{ fontFamily: 'BlissPro-Bold' }}>
               Courses
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <Image style={{ height: 25, width: 25 }} source={{uri:"https://icon-library.com/images/free-books-icon/free-books-icon-0.jpg"}} />
            ),
          }}
        />
        <Bottom.Screen
       name="BlogStack"
          component={BlogStack}
          options={{
            headerShown:true,
            tabBarLabel: (
              <Text style={{ fontFamily: 'BlissPro-Bold' }}>
               Blogs
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <Image style={{ height: 25, width: 25, }} source={{uri:"https://icon-library.com/images/blog-icon-png/blog-icon-png-13.jpg"}} />
            ),
          }}
        />
        <Bottom.Screen
          name="SettingStack"
          component={SettingStack}
          options={{
            headerShown:true,
            tabBarLabel: (
              <Text style={{ fontFamily: 'BlissPro-Bold' }}>
              Settings
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <Image style={{ height: 20, width: 20 ,marginTop:3 }} source={{uri:"https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png"}} />
            ),
          }}
        />
        <Bottom.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            headerShown:true,
            tabBarLabel: (
              <Text style={{ fontFamily: 'BlissPro-Bold' }}>
               Profile
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <Image style={{ height: 20, width: 20 ,marginTop:3 }}  source={{uri:"https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"}} />
            ),
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>






  );
};
export default BottomNavigation;

const HomeStack = ()=>{
  const Stack=createNativeStackNavigator();

  return(
<Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#f9f7f7e6",

      },

      headerTintColor: 'black',
     


    }}>
<Stack.Screen name="Home"   options={{  
  title:'Code Geeks',
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily:"cursive",
    fontSize:25
  },



  
  

headerRight:()=>(
  <Image source={{uri:"https://icon-library.com/images/register-icon-png/register-icon-png-0.jpg"}} style={{borderRadius:0, marginRight:10,  height:25, width:25}}/>
)
 }}



component={HomeScreen} />

</Stack.Navigator>

  )
}


const CourseStack = ()=>{
  const Stack=createNativeStackNavigator();

  return(
<Stack.Navigator>
<Stack.Screen name="Course" component={CourseScreen} />

</Stack.Navigator>

  )
}



const BlogStack = ()=>{
  const Stack=createNativeStackNavigator();

  return(
<Stack.Navigator>
<Stack.Screen name="Blog" component={BlogScreen} />

</Stack.Navigator>

  )
}



const ProfileStack = ()=>{
  const Stack=createNativeStackNavigator();

  return(
<Stack.Navigator>
<Stack.Screen name="Profile" component={ProfileScreen} />

</Stack.Navigator>

  )
}



const SettingStack = ()=>{
  const Stack=createNativeStackNavigator();

  return(
<Stack.Navigator>
<Stack.Screen name="Setting" component={SettingScreen} />

</Stack.Navigator>

  )
}

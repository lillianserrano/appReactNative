//About/index
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import dev from './dev';
import idea from './idea';

const TabTop = createMaterialTopTabNavigator();

export default function About(){
  return(
    
      <TabTop.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'white',
    },
  }}
>
        <TabTop.Screen   name="IDEIA"  component={idea}  options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
        <Icon name="lightbulb" color={'#304880'} size={'lg'} /> ),}}/>
        <TabTop.Screen name='DEVs' component={dev} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
        <Icon name="user-friends" color={'#304880'} size={'lg'} />),}}/>      
    </TabTop.Navigator>
  )
}
const icons ={
  Dev:{
    name:'fas fa-user-friends'
  },
  Idea:{
    name:'fas fa-lightbulb' 
  }

}

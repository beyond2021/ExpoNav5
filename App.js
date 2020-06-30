
import React, {Component} from 'react';
import Feed from './feed';
import { View, Text } from 'react-native';
// detail screen
import Detail from './detail';


// screens
import Screen1 from './drawer/screen1';
import Screen2 from './drawer/screen2';
import Screen3 from './drawer/screen3';

//Tabs
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';


import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();


export default class App extends Component {

    //stack for home
    createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed}  />
      <Stack.Screen name="Detail" component={Detail}  />
    </Stack.Navigator>



  render() {

    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={this.createHomeStack}/>
          <Drawer.Screen name="Contacts" component={Screen1}/>
          <Drawer.Screen name="Favorites" component={Screen2}/>
          <Drawer.Screen name="Settings" component={Screen3}/>
        </Drawer.Navigator>

      </NavigationContainer>
    );

  }
  
}



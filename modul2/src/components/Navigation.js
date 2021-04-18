import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OverView from './OverView';
import ListSE from './ListSE';
import Side from './Side';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import AddBill from './AddBill';
import ChoseExpenses from './ChoseExpenses';
import ChoseExpenses2 from './ChoseExpenses2';
import EditS from './EditS';
import Wellcome from './Wellcome';
const tabs = createBottomTabNavigator();
const stack = createStackNavigator();

const MyTabs = () => {
  return (
    <tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#b50000',
        activeBackgroundColor: '#fff0f0',
      }}>
      <tabs.Screen
        name="OverView"
        component={OverView}
        options={{
          tabBarLabel: 'Tổng quan',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <tabs.Screen
        name="ListSE"
        component={ListSE}
        options={{
          tabBarLabel: 'Danh sách',
          tabBarIcon: ({color, size}) => (
            <Icon2
              name="ios-file-tray-stacked-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </tabs.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Side">
        <stack.Screen
          name="Side"
          component={Side}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="OverViewTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="ListSE"
          component={ListSE}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="AddBill"
          component={AddBill}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="ChoseExpenses"
          component={ChoseExpenses}
          options={{title: 'Chọn nhóm'}}
        />
        <stack.Screen
          name="EditS"
          component={EditS}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="ChoseExpenses2"
          component={ChoseExpenses2}
          options={{title: 'Chọn nhóm'}}
        />
      </stack.Navigator>
      <stack.Screen
        name="Wellcome"
        component={Wellcome}
        options={{headerShown: false}}
      />
    </NavigationContainer>
  );
};

export default Navigation;

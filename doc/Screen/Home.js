import React from 'react';
import { TouchableOpacity, Text, Image, SafeAreaView, View, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Route/HomeScreen';
import Location from '../Route/Location';
import Profile from '../Route/Profile';


const Tab = createBottomTabNavigator();
function Home(props) {
    return (
            <Tab.Navigator 
            tabBarOptions={{
                showLabel:false,
            }}
            >
                <Tab.Screen name="Location" component={Location} />
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
    );
}



export default Home;
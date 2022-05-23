
import React from 'react';
import {
    TouchableOpacity, Text, SafeAreaView,
    Image, ScrollView, View, Dimensions
} from 'react-native'
import Input from '../Component/Input'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Button from '../Component/Button';
import icon from '../assets/loading.png';

function LogIn(props) {
    const [UserName, setUserName] = React.useState(null);
    const [Password, setPassword] = React.useState(null);
    const window = Dimensions.get('window')
    return (
        <ScrollView style={{ 

        }}>
            <View style={{
                height: window.height,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 100,
                    width: 100,
                    borderRadius: 70,
                    backgroundColor: '#1C2348',
                    marginBottom: 40,


                }}>
                    <Image style={{
                        height: 80,
                        width: 80,
                    }} source={icon} />
                </View>
                <Input onChange={setUserName} placeholder='User name' icon={() => (
                    <FontAwesome name="user-circle-o" size={30} color="#1C2348" />
                )} />
                <Input onChange={setPassword} placeholder='Password' icon={() => (
                    <Entypo name="lock" size={30} color="#1C2348" />
                )} />
                <Button onPress={() => {props.navigation.navigate('Home Page')}}>

                </Button>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Forget Password') }} style={{
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#1C2348',
                    }} >
                        Forget Password ?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Create Account') }} style={{
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#1C2348',
                    }} >
                        Create new account
                    </Text>
                </TouchableOpacity>
            </View>



        </ScrollView>
    );
}

export default LogIn;
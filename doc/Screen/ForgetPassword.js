import React from 'react';
import { TouchableOpacity, Text, Image, SafeAreaView, View, TextInput, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import icon from '../assets/loading.png';
import Input from '../Component/Input'
import Button from '../Component/Button';

function ForgetPassword(props) {
    const [UserName, setUserName] = React.useState(null);
    return (
        <View style={{

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
                marginTop: '40%',

            }}>
                <Image style={{
                    height: 80,
                    width: 80,
                }} source={icon} />
            </View>
            <View style={{
                width: '100%',
                marginTop:'8%',
            }}>
                <Input onChange={setUserName} placeholder='Email' icon={() => (
                    <MaterialIcons name="email" size={24} color="#1C2348" />
                )} />
                <Button buttonName='Send' disable={UserName ? false : true}>
                
                </Button>
            </View>
            <View style={{
                marginTop:230,
            }}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Create Account')}} style={{
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

        </View>
    );
}

export default ForgetPassword;
import React from 'react';
import { TouchableOpacity, Text, Image, SafeAreaView, View, TextInput, } from 'react-native';

function Button(props) {
    const [UserName, setUserName] = React.useState(null);
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disable}
         style={{
                height: 50,
                width: '90%',
                borderRadius: 25,
                borderColor: '#808080',
                borderWidth: 1,
                margin: 20,
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10,
                paddingHorizontal: 15,
                justifyContent:'center',



            }}>

                <Text style={{
                    fontSize:25,
                    fontWeight:'bold',
                    color: '#1C2348',
                }}>
                    LOG IN
                </Text>
        </TouchableOpacity>
    );
}

export default Button;
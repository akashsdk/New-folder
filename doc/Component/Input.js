import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View,TextInput } from 'react-native'
function Input(props) {
    return (
        <TouchableOpacity >
        <View style={{
            height: 50,
            width:'90%',
            borderRadius: 25,
            borderColor:'#808080',
            borderWidth:1,
            margin: 20,
            alignItems: 'center',
            marginTop:10,
            marginBottom:10,
            flexDirection:'row',
            paddingHorizontal: 15,
        
        
        }}>

            <TextInput onChangeText={props.onChange} placeholder={props.placeholder}
            style= {{
                color:'#808080',
                margin:5,
                flex:5,

            }}>

            </TextInput>
            <props.icon style={{
                margin: 5,
                flex:1,
            }}/>
        </View>
            
            </TouchableOpacity>
    );
}

export default Input;
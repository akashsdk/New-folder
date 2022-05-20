import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View } from 'react-native'
function Input(props) {
    return (
        <View style={{
            height: 50,
            borderRadius: 25,
            borderColor:'black',
            backgroundColor: 'red',
            margin: 20,
            flexDirection:'row',
            display:'flex'
        }}>
            <View>
            <Text>gjgch</Text>
            </View>

            <View>
            <Text>gjg</Text>
            </View>
        </View>
    );
}

export default Input;
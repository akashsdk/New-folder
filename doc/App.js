import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgetPassword from './Screen/ForgetPassword';
import Register from './Component/Register';
import LogIn from './Screen/LogIn';
import Home from './Screen/Home'


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:true}} name="LogIn Page" component={LogIn} />
        <Stack.Screen options={{headerShown:false}} name="Forget Password" component={ForgetPassword} />
        <Stack.Screen options={{headerShown:false}} name="Create Account" component={Register} />
        <Stack.Screen options={{headerShown:false}} name="Already have an account?" component={LogIn} />
        <Stack.Screen options={{headerShown:false}} name="Home Page" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

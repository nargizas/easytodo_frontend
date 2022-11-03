import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import EmptyDashboardScreen from './screens/EmptyDashboardScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View>
    //   <Text>Hello!</Text>
    //   <Text>Sign up or Log in:</Text>
    //   <PrimaryButton>Continue with Google</PrimaryButton>
    // </View>
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="EmptyDashboard" component={EmptyDashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({

});

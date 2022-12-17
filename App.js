import { NavigationContainer } from '@react-navigation/native';
import { React } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import EmptyDashboardScreen from './screens/EmptyDashboardScreen';
import SuggestionsScreen from './screens/SuggestionsScreen';
import AddItemScreen from './screens/AddItemScreen';
import ToDoItemsContextProvider from './store/todoitems-context';

const Stack = createNativeStackNavigator();

export default function App() {
  // const [currentDate, setCurrentDate] = useState['']

  // useEffect(())
  return (
    <>
      <StatusBar style="dark" />
      <ToDoItemsContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerStyle: { backgroundColor: '#1D7874' }, headerTitleAlign: 'center', headerTintColor: '#f5f5f5' }} />
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{
                title: 'Dashboard', headerStyle: { backgroundColor: '#1D7874' }, headerTitleAlign: 'center', headerTintColor: '#f5f5f5',
              }}
            />
            <Stack.Screen
              name="EmptyDashboard"
              component={EmptyDashboardScreen}
              options={{
                title: 'Today', headerStyle: { backgroundColor: '#1D7874' }, headerTitleAlign: 'center', headerTintColor: '#f5f5f5',
              }}
            />
            <Stack.Screen
              name="Suggestions"
              component={SuggestionsScreen}
              options={{
                title: 'Suggestions', headerStyle: { backgroundColor: '#1D7874' }, headerTitleAlign: 'center', headerTintColor: '#f5f5f5',
              }}
            />
            <Stack.Screen
              name="AddItem"
              component={AddItemScreen}
              options={{
                title: 'Add a new item', headerStyle: { backgroundColor: '#1D7874' }, headerTitleAlign: 'center', headerTintColor: '#f5f5f5',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ToDoItemsContextProvider>

    </>

  );
}

const styles = StyleSheet.create({

});

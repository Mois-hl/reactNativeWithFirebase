import Home from './src/views/home/home';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import UserList from './src/views/user/UserList';
import CreateUser from './src/views/user/createUser/createUser';
import UserDetails from './src/views/user/userDetails/userDetails';


const Stack = createNativeStackNavigator()

const MyStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="CreateUser" component={CreateUser} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
      <Stack.Screen name="UserList" component={UserList} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </>
  );
}
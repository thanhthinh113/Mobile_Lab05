import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./view/Home";
import Color from "./view/Color";

const Stack= createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Color" component={Color} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



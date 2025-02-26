import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import TabRoutes from "./tabs.routes";
import StackRoutes from "./stack.routes";

const Stack = createNativeStackNavigator();

export default function Routes(){
    
    return (
       <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Tabs' component={TabRoutes}/>
                <Stack.Screen name='Stack' component={StackRoutes}/>
            </Stack.Navigator>
       </NavigationContainer>
    )
}
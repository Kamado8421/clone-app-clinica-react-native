import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import RegisterUser from '../screens/RegisterUser';
import LoginUser from '../screens/LoginUser';
import CheckUp from '../screens/showcases-screens/CheckUp';
import Cirurgias from '../screens/showcases-screens/Cirurgias';
import ShowPrices from '../screens/showcases-screens/ShowPrices';
import Helps from '../screens/Helps';
import BeaforeShowPrices from '../screens/showcases-screens/beafore-screens/BeaforeShowPrices';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return (
       <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                component={LoginUser}
                name='LoginUser'
            />

            <Stack.Screen 
                component={RegisterUser}
                name='RegisterUser'
            />

            <Stack.Screen 
                component={CheckUp}
                name='CheckUpScreen'
            />

            <Stack.Screen 
                component={Cirurgias}
                name='CirurgiasScreen'
            />
            
            <Stack.Screen 
                component={BeaforeShowPrices}
                name='BeaforeShowPricesScreen'
            />
            <Stack.Screen 
                component={ShowPrices}
                name='ShowPricesScreen'
            />
            <Stack.Screen 
                component={Helps}
                name='HelpsScreen'
            />
       </Stack.Navigator>
    )
}
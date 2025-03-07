import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import RegisterUser from '../screens/RegisterUser';
import LoginUser from '../screens/LoginUser';
import CheckUp from '../screens/showcases-screens/CheckUp';
import Cirurgias from '../screens/showcases-screens/Cirurgias';
import ShowPrices from '../screens/showcases-screens/ShowPrices';
import Helps from '../screens/Helps';
import BeaforeShowPrices from '../screens/showcases-screens/beafore-screens/BeaforeShowPrices';
import BeaforeOdonto from '../screens/showcases-screens/beafore-screens/BeaforeOdonto';
import BeaforeOdontoConsultas from '../screens/showcases-screens/beafore-screens/BeaforeOdontoConsultas';
import ExamesOdonto from '../screens/showcases-screens/ExamesOdonto';
import ProcedimentoOdonto from '../screens/showcases-screens/ProcedimentoOdonto';
import AgendarExames from '../screens/showcases-screens/AgendarExames';
import BeaforeExames from '../screens/showcases-screens/beafore-screens/BeaforeExames';
import Vantagens from '../screens/showcases-screens/Vantages';

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
            <Stack.Screen 
                component={BeaforeOdonto}
                name='BeaforeOdontoScreen'
            />

            <Stack.Screen 
                component={BeaforeOdontoConsultas}
                name='BeaforeOdontoConsultasScreen'
            />

            <Stack.Screen 
                component={ExamesOdonto}
                name='ExamesOdontoScreen'
            />

            <Stack.Screen 
                component={ProcedimentoOdonto}
                name='ProcedimentoOdontoScreen'
            />
            <Stack.Screen 
                component={AgendarExames}
                name='AgendarExamesScreen'
            />
            <Stack.Screen 
                component={BeaforeExames}
                name='BeaforeExamesScreen'
            />
            <Stack.Screen 
                component={Vantagens}
                name='VantagensScreen'
            />
       </Stack.Navigator>
    )
}
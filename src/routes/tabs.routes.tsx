import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Agenda from '../screens/Agenda';
import Cart from '../screens/Cart';
import Credits from '../screens/Credits';
import Profile from '../screens/Profile';

import LoginUser from '../screens/LoginUser';
import PopUp from '../components/pop-up';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            {/* [<Tab.Screen
                component={PopUp}
                name='Test'
                options={{  
                    tabBarIcon: ({ color, size }) => <Feather name='code' color={color} size={size} />,
                    tabBarLabel: 'Testes'
                }}
            />] */}
            <Tab.Screen
                component={Home}
                name='Home'
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />,
                    tabBarLabel: 'Início'
                }}
            />
            <Tab.Screen
                component={Agenda}
                name='Agenda'
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='calendar' cacolor={color} size={size} />,
                    tabBarLabel: 'Agenda',
                }}
            />
            <Tab.Screen
                component={Cart}
                name='Cart'
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='shopping-cart' color={color} size={size} />,
                    tabBarLabel: 'Carrinho'
                }}
            />
            <Tab.Screen
                component={Credits}
                name='Credits'
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='dollar-sign' color={color} size={size} />,
                    tabBarLabel: 'Créditos'
                }}
            />
            <Tab.Screen
                component={Profile}
                name='Profile'
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='user' color={color} size={size} />,
                    tabBarLabel: 'Início'
                }}
            />
        </Tab.Navigator>
    )
}




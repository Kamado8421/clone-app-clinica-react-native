import { StatusBar } from 'react-native';
import Routes from './src/routes';
import colors from './src/config/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export let USER_ON: any = false;

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      console.log('Meu Local: ', storedUser)
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    checkUser();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.azulEscuro} translucent={true} barStyle="light-content" />
      <Routes />
    </>
  );
}

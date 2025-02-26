import { StatusBar } from 'react-native';
import Routes from './src/routes';
import colors from './src/config/colors';

export let USER_ON: any = true;

export default function App() {

  return (
    <>
      <StatusBar backgroundColor={colors.azulEscuro} translucent={true} barStyle="light-content" />
      <Routes />
    </>
  );
}

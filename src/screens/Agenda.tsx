import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import { USER_ON } from '../../App';
import LoginRequired from './LoginRequired';

export default function Agenda() {
  if (!USER_ON) return (
    <LoginRequired
      titlePage='Minha Agenda'
      vectorName='calendar_card'
      textMarketing='Crie ou acesse sua conta para vizualizar seus agendamentos'
    />
  )

  return (
    <View style={styles.container}>
      <Text>Agenda</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgCinze,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

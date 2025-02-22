import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import LoginRequired from './LoginRequired';
import { USER_ON } from '../../App';

export default function Credits() {
  if (!USER_ON) return (
      <LoginRequired
        titlePage='Seus Créditos Clínica Clone'
        vectorName='money_card'
        textMarketing='Crie ou acesse sua conta para vizualizar seus créditos Clone da Clínica'
      />
    )
  return (
    <View style={styles.container}>
      <Text>Creditos</Text>
      
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

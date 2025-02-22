import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import { USER_ON } from '../../App';
import LoginRequired from './LoginRequired';
import SimpleHeaderTitle from '../components/simple-header-title';
import { Feather } from '@expo/vector-icons';

export default function Cart() {
  if (!USER_ON) return (
    <LoginRequired
      titlePage='Meu Carrinho'
      vectorName='working_card'
      textMarketing='Crie ou acesse sua conta para vizualizar seus pedidos'
    />
  )
  return (
    <View style={styles.container}>
      <SimpleHeaderTitle title='Meu Carrinho' />
      <View style={styles.dashboard}>
        <View style={styles.leftContentDashboard}>
          <Feather name='dollar-sign' size={16} color={'black'} />
          <Text>Créditos Clínica Clone</Text>
        </View>
        <View style={styles.rightContentDashboard}>
          <Text style={{ color: '#2d2d2d', fontSize: 14 }}>Saldo Disponível</Text>
          <Text style={{ color: colors.azulClaro, fontSize: 16, fontWeight: 700 }}>R$ 0</Text>
        </View>
      </View>

      <Text style={{fontWeight: 'bold', fontSize: 16, alignSelf: 'center', marginTop: '70%'}}>Você ainda não solicitou nenhum serviço</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgCinze,
  },

  dashboard: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    width: '92%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderLeftWidth: 8,
    borderLeftColor: colors.azulClaro,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.10,
    elevation: 5,
    shadowRadius: 6,
    justifyContent: 'space-between',
    height: 70
  },

  leftContentDashboard: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5
  },

  rightContentDashboard: {
    flexDirection: 'column',
    alignItems: 'center',
  }
});

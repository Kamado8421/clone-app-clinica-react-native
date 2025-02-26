import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import LoginRequired from './LoginRequired';
import { USER_ON } from '../../App';
import HeaderForTabs from '../components/header-for-tabs';
import { Feather } from '@expo/vector-icons';
import SimpleHeaderTitle from '../components/simple-header-title';

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
      <SimpleHeaderTitle title='Seus Créditos' />
      <View style={styles.bigSubcontainer}>
        <View style={styles.row01}>
          <Text style={{ fontSize: 16, fontWeight: 500 }}>Saldo na Plataforma</Text>
          <Text style={{ fontSize: 40, fontWeight: 800, color: colors.azulEscuro }}>R$ 0</Text>
        </View>
        <View style={styles.row02}>
          <TouchableOpacity style={styles.iconBox}>
            <View style={styles.icon}>
              <Feather name='plus-circle' size={25} color={'white'} />
            </View>
            <Text style={{ fontSize: 14, fontWeight: 500, color: colors.azulClaro }}>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <View style={styles.icon}>
              <Feather name='paperclip' size={25} color={'white'} />
            </View>
            <Text style={{ fontSize: 14, fontWeight: 500, color: colors.azulClaro }}>Extrato</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.adBox}>
        <View style={styles.adTextBox}>
          <Text style={styles.adTitle}>Recarregue com {'\n'}Boleto</Text>
          <Text style={styles.adDesc}>Adicione créditos via boleto para pagar consultas e exames</Text>
        </View>
        <Image
          style={styles.adImage}
          source={require('../assets/money-card.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgCinze,
  },

  bigSubcontainer: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 250
  },

  row01: {
    alignItems: 'center',
    flexDirection: 'column',
  },

  row02: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 45,
    marginTop: 30
  },

  iconBox: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8
  },

  icon: {
    backgroundColor: colors.azulClaro,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  adBox: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20
  },

  adTitle: {
    color: colors.azulEscuro,
    fontSize: 18,
    fontWeight: 500
  },

  adDesc: {
    fontSize: 16
  },

  adTextBox: {
    flex: 1
  },

  adImage: {
    flex: 1,
    width: 130,
    height: 130,
    objectFit: 'contain'
  }
});

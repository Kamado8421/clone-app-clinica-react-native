import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import LoginRequired from './LoginRequired';
import { useEffect, useState } from 'react';
import SimpleHeaderTitle from '../components/simple-header-title';
import { checkUser } from '../services';
import Loading from '../components/pre-loading';
import { TIME_LOADING_DEFAULT } from '../config/infos';

export default function Agenda() {
  
  const [screen, setScreen] = useState('PENDENTES');

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser(setUser);
    setTimeout(() => setLoading(false), TIME_LOADING_DEFAULT)
  }, []);

  if(loading && user) {
    return <Loading />
  }

  if (!user) return (
    <LoginRequired
      titlePage='Minha Agenda'
      vectorName='calendar_card'
      textMarketing='Crie ou acesse sua conta para vizualizar seus agendamentos'
    />
  )


  const changeScreen = (screen: 'PENDENTES' | 'ANTERIORES') => {
    setScreen(screen);
  }


  return (
    <View style={styles.container}>
      <SimpleHeaderTitle title='Minha Agenda' />
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-around', marginTop: 20 }}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => changeScreen('PENDENTES')} style={[styles.bttn, screen === 'PENDENTES' ? styles.bttnON : {}]}>
          <Text style={styles.bttnText}>PENDENTES</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={() => changeScreen('ANTERIORES')} style={[styles.bttn, screen === 'ANTERIORES' ? styles.bttnON : {}]}>
          <Text style={styles.bttnText}>ANTERIORES</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 16, alignSelf: 'center', marginTop: '70%' }}>Nenhum agendamento realizado ainda.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgCinze,
  },

  bttn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderBottomWidth: 3,
    paddingHorizontal: 25,
    paddingVertical: 12,
    width: 180,
    borderBottomColor: 'transparent',
  },

  bttnON: {
    borderBottomColor: colors.vermelhoBase
  },

  bttnText: {
    fontSize: 16,
    color: colors.azulEscuro
  }
});

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import LoginRequired from './LoginRequired';
import HeaderLogo from '../components/header-logo';
import ProfileLink, { ProfileLinkProps } from '../components/profile-link';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { checkUser } from '../services';
import Loading from '../components/pre-loading';
import { TIME_LOADING_DEFAULT } from '../config/infos';

const routesProfile: ProfileLinkProps[] = [
  { label: 'Editar Perfil', iconName: 'edit' },
  { label: 'Médicos Favoritos', iconName: 'star' },
  { label: 'Dependentes', iconName: 'users' },
  { label: 'Cartões de Crédito', iconName: 'credit-card' },
  { label: 'Carteira Clone da Clínica', iconName: 'calendar' },
  { label: 'Dúvidas Frequentes', iconName: 'help-circle', externalLink: true },
  { label: 'Termos e Condicões', iconName: 'clipboard', externalLink: true },
  { label: 'Política de Privacidade', iconName: 'key', externalLink: true },
  { label: 'Sair', iconName: 'power', isLogoutBttn: true },
]

export default function Profile() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser(setUser);
    setTimeout(() => setLoading(false), TIME_LOADING_DEFAULT)
  }, []);

  if (loading && user) {
    return <Loading />
  }

  if (!user) return (
    <LoginRequired
      titlePage='Perfil'
      vectorName='profile_card'
      textMarketing='Cadastre-se grátis e tenha acesso ao melhor da medicina digital'
    />
  )

  return (
    <View style={styles.container}>
      <HeaderLogo />
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#2d2d2d' }}>
        <Feather name='user' size={23} />
        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 17 }}>LUCIANO MENDES</Text>
          <Text style={{ fontSize: 14 }}>Maranhão</Text>
        </View>
      </View>
      {routesProfile.map((link, index) =>
        <ProfileLink key={index}
          iconName={link.iconName}
          label={link.label}
          screenName={link.screenName}
          isLogoutBttn={link.isLogoutBttn}
          externalLink={link.externalLink}
        />)}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgCinze,
  },


});

import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import LoginRequired from './LoginRequired';
import { USER_ON } from '../../App';
import HeaderLogo from '../components/header-logo';
import ProfileLink, { ProfileLinkProps } from '../components/profile-link';
import { Feather } from '@expo/vector-icons';

const routesProfile: ProfileLinkProps[] = [
  { label: 'Editar Perfil', iconName: 'edit' },
  { label: 'Médicos Favoritos', iconName: 'star' },
  { label: 'Dependentes', iconName: 'users' },
  { label: 'Cartões de Crédito', iconName: 'credit-card' },
  { label: 'Carteira Clone da Clínica', iconName: 'calendar' },
  { label: 'Dúvidas Frequentes', iconName: 'help-circle' },
  { label: 'Termos e Condicões', iconName: 'clipboard' },
  { label: 'Política de Privacidade', iconName: 'key' },
  { label: 'Sair', iconName: 'power' },
]

export default function Profile() {
  if (!USER_ON) return (
    <LoginRequired
      titlePage='Perfil'
      vectorName='profile_card'
      textMarketing='Cadastre-se grátis e tenha acesso ao melhor da medicina digital'
    />
  )
  
  return (
    <View style={styles.container}>
      <HeaderLogo/>
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#2d2d2d'}}>
          <Feather name='user' size={23}/>
          <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style={{fontSize: 17}}>LUCIANO MENDES</Text>
            <Text style={{fontSize: 14}}>Maranhão</Text>
          </View>
      </View>
      {routesProfile.map((link, index) =>
        <ProfileLink key={index}
          iconName={link.iconName}
          label={link.label}
          screenName={link.screenName}
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

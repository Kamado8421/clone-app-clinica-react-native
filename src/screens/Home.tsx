import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import ShowcaseButton, { PropsTypeDisplayButton } from '../components/showcase-button';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import WhatsAppLinkingButton from '../components/whatsapp-button';
import ChangeCytyPopUpTemplate from '../components/pop-ups-templates/change-city-pop-up';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { router } from 'expo-router';

const DisplayButtons: PropsTypeDisplayButton[] = [
  { iconName: 'consultas', label: 'Consultas' }, { iconName: 'exames', label: 'Exames' }, { iconName: 'check_up', label: 'Check-up' },
  { iconName: 'procedimento', label: 'Procedimentos' }, { iconName: 'cirurgia', label: 'Cirurgias' }, { iconName: 'odonto', label: 'Odonto' },
  { iconName: 'resultados_exames', label: 'Resultados Exames' }, { iconName: 'socorro', label: 'Pronto Socorro' }, { iconName: 'vantagens', label: 'Clone Clínica Vantagens' },
  { iconName: 'dolar', label: 'Ver Preços' }, { iconName: 'chat', label: 'Pergunte ao Doutor' }, { iconName: 'atendimento', label: 'Locais Atendimento' },
]

export default function Home() {


  const navigation = useNavigation<any>();
  const [statePopUp, setStatePopUp] = useState(false);
  const [city, setCity] = useState('');

  useEffect(() => {
    const getClinicCity = async () => {
      try {
        const cityFounded = await AsyncStorage.getItem('clinic_city');
        
        if(cityFounded){
          setCity(cityFounded);
          setStatePopUp(false)
        } else {
          setCity('...');
          setStatePopUp(true)
        }

      } catch (error) {
        console.log(error);
      }
    }

    getClinicCity();
  }, [])

  return (
    <View style={styles.container}>

      <ChangeCytyPopUpTemplate setCity={setCity} setStatePopUp={setStatePopUp} statePopUp={statePopUp} />
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.helpButton} onPress={() => navigation.navigate('Stack', { screen: 'HelpsScreen' })}>
          <Feather name='help-circle' size={23} color={'#7a7a7a'} />
          <Text style={styles.textHelpButton}>Ajuda</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.boxInfo}>
        <TouchableOpacity style={styles.boxInfoLeftContent} onPress={() => setStatePopUp(true)}>
          <Feather name='map' color={colors.azulEscuro} size={20} />
          <Text style={{ color: colors.azulClaro, fontSize: 16, fontWeight: 700 }}>{city}</Text>
          <Feather name='chevron-down' color={colors.azulEscuro} size={20} />
        </TouchableOpacity>
        <View style={styles.boxInfoRightContent}>
          <Text style={{ color: '#2d2d2d', fontSize: 14 }}>Créditos - Clínica</Text>
          <Text style={{ color: colors.azulClaro, fontSize: 16, fontWeight: 700 }}>R$ 0</Text>
        </View>
      </View>


      <WhatsAppLinkingButton contentText='full' />

      <View style={styles.areaButtons}>
        {DisplayButtons.map((bttn, index) => <ShowcaseButton key={index} label={bttn.label} iconName={bttn.iconName} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgCinze,
    alignItems: 'center',

    paddingHorizontal: 10
  },

  logo: {
    height: 60,
    width: 200,
    objectFit: 'contain',
    alignSelf: 'center',
    flex: 2,
    marginTop: 20
  },

  textHelpButton: {
    fontSize: 12,
    color: '#7b7b7b',
    textAlign: 'center'
  },

  helpButton: {
    position: 'absolute',
    top: 37,
    right: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },

  header: {
    width: Dimensions.get('screen').width,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 90
  },

  areaButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 20
  },

  boxInfo: {
    marginTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    height: 70,
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.23,
    elevation: 5,
    shadowRadius: 6
  },

  boxInfoLeftContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },

  boxInfoRightContent: {
    flexDirection: 'column',
    gap: 5,
    alignItems: 'center'
  },

});

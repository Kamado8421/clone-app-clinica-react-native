import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PopUp from '../pop-up';
import { Feather } from '@expo/vector-icons';
import colors from '../../config/colors';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PropsType {
  setStatePopUp: Function;
  statePopUp: boolean;
  setCity: Function;
}
export default function ChangeCytyPopUpTemplate(props: PropsType) {


  const handleCity = async (ct: string) => {

    let valueCity = ''

    switch (ct.toUpperCase()) {
      case 'MA':
        valueCity = 'Maranhão'
        props.setCity(valueCity)
        break;
      case 'PI':
        valueCity = 'Piauí'
        props.setCity(valueCity)
        break;
    }

    if(valueCity){
      AsyncStorage.setItem('clinic_city', valueCity)
      console.log('Valor de cidade: ', valueCity)
    }
    props.setStatePopUp(false);
  }
  return (
    <PopUp setStateON={props.setStatePopUp} stateON={props.statePopUp}>
      <View>
        <Text style={styles.popUpheader}>Onde Gostaria de ser atendido?</Text>
        <Text style={styles.popUpDesc}>Excolha o Estado que você deseja fazer o{'\n'}agendamento.</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.popUpBoxButtonOption} onPress={() => handleCity('MA')}>
          <Text>Maranhão</Text>
          <Feather name='chevron-right' size={23} color={colors.azulClaro} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.popUpBoxButtonOption} onPress={() => handleCity('PI')}>
          <Text>Piauí</Text>
          <Feather name='chevron-right' size={23} color={colors.azulClaro} />
        </TouchableOpacity>
      </View>
    </PopUp>
  )
}

const styles = StyleSheet.create({
  popUpContent: {

  },

  popUpheader: {
    fontSize: 20,
    color: colors.azulClaro,
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 10,
  },

  popUpDesc: {
    fontSize: 14,
    color: 'black',
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10
  },

  popUpBoxButtonOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2d2d2d',
    marginTop: 5
  }
})
import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RegistryStamps from '../components/registry-stamps'
import RegisterUserForm from '../components/register-form/user-form';
import RegisterAddressForm from '../components/register-form/address-from';
import RegisterInfoForm from '../components/register-form/info-form';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { TypeUser, UserObject } from '../config/interfaces';

export default function RegisterUser() {

    const [stamp, setStamp] = useState(1);
    const [dataUser, setDataUser] = useState(UserObject);
    const [dataAddress, setDataAddress] = useState({});
    const [dataInfo, setDataInfo] = useState({});

    function userDataAction(data: TypeUser) {
        setDataUser(data);
        if (dataUser) setStamp(2);
    }

    function addressDataAction(data: {}) {
        setDataAddress(data);
        if (dataAddress) setStamp(3);
    }

    async function infoDataAction(data: {}) {
        setDataInfo(data);
        console.log({
            user: dataUser,
            address: dataAddress,
            info: dataInfo
        })
        // if (dataInfo) alert('Finalizado')

        await axios.get('http://localhost:3000/teste/')
            .then(resp => { console.log(resp.data); alert('Finalizado') })
    }

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name='arrow-left' size={20} color={'black'} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>Criar Conta</Text>
            </View>
            <RegistryStamps stamp={stamp} />

            {
                stamp === 1 ? <RegisterUserForm setDataUser={userDataAction} /> :
                    stamp === 2 ? <RegisterAddressForm setDataAddress={addressDataAction} /> :
                        stamp === 3 ? <RegisterInfoForm setDataInfo={infoDataAction} /> : null
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 10
    },

    header: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        gap: 30,
        marginTop: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#0000004b',
        paddingBottom: 10

    }
})

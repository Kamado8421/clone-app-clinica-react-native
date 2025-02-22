import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import LoginForm from '../components/login-form'
import { useNavigation } from '@react-navigation/native';

export default function LoginUser() {
    const [dataLogin, setDataLogin] = useState({});

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 50, marginLeft: 20 }}>
                <Feather name='arrow-left' size={25} color={'white'} />
            </TouchableOpacity>
            <View style={styles.areaLogo}>
                <Text style={styles.titleLogo}>Clone da Clínica</Text>
            </View>
            <View style={styles.areaForm}>
                <Text style={styles.titleForm}>Entre na sua conta</Text>
                <Text style={styles.descForm}>Se você já tem uma conta, faça login</Text>
                <LoginForm setDataLogin={setDataLogin} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c03a3b',

    },

    areaLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleLogo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff'
    },

    areaForm: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 2,
        paddingHorizontal: 20,
        width: '100%'
    },

    titleForm: {
        fontSize: 20,
        color: '#000',
        marginTop: 20,
        marginBottom: 5,
        fontWeight: 'bold',
    },

    descForm: {
        color: '#7b7b7b',
        fontSize: 14,
        fontWeight: 500,
        marginBottom: 15
    }


})

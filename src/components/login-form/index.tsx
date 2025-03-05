import { View, Text, TouchableOpacity, Alert, ActivityIndicator, DevSettings } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputController from '../input-controller';
import { stylesButton } from '../submit-button/styles';
import colors from '../../config/colors';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
const schema = yup.object(({
    email: yup.string().email('Verifique a escrita do seu e-mail').required('Infome o e-mail'),
    password: yup.string().min(8, 'Senha inválida').required('Informe sua senha'),
}))

interface PropsType {
    setDataLogin: Function;
}
export default function LoginForm(props: PropsType) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const [loading, setLoading] = useState(false);

    const handleAction = async (data: { email: string, password: string }) => {

        if (loading) return;
        setLoading(true)

        props.setDataLogin(data)
        console.log('meu data aqui: ', data)

        try {
            await axios.post("http://192.168.199.15:3333/login", {
                email: data.email,
                password: data.password
            }, { timeout: 5000 })
                .then(async response => {
                    console.log(response.data)
                    const user = response.data.user;

                    // Armazenar os dados do usuário no AsyncStorage
                    await AsyncStorage.setItem("user", JSON.stringify(user));

                    //navigation.navigate("Tabs"); // Redireciona para a tela principal
                    DevSettings.reload('Carregando...');
                })
                .catch(err => {
                    console.log('Meu erro aqui: ',err);
                    Alert.alert('Erro de Servidor', 'Desculpe, mas não conseguimos concluir esta ação devido problemas internos no servidor.\n\nTente novamente mais tarde.')
                })


        } catch (error) {
            console.log(error);
            Alert.alert("Erro ao fazer login", "Verifique suas credenciais.");
        }

        setLoading(false);
    }

    const navigation = useNavigation<any>();

    return (
        <View>
            <InputController
                control={control}
                dataName='email'
                placeholder='E-mail'
                errorMessage={`${errors.email?.message}`}
                isError={errors.email ? true : false}
            />
            <InputController
                control={control}
                dataName='password'
                placeholder='Senha'
                errorMessage={`${errors.password?.message}`}
                isError={errors.password ? true : false}
            />

            <TouchableOpacity onPress={() => alert('Recuperando...')}>
                <Text style={{ textAlign: 'center', marginTop: 15 }}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity disabled={loading} style={[stylesButton.button, { width: '100%', marginTop: 15 }]} onPress={handleSubmit(handleAction)}>
                {loading ? <ActivityIndicator size={'small'} color={'white'} /> : <Text style={stylesButton.title}>ENTRAR</Text>}
            </TouchableOpacity>

            <Text style={{ textAlign: 'center', fontWeight: 600 }}>OU</Text>

            <TouchableOpacity disabled={loading} style={[stylesButton.button, { width: '100%', marginTop: 15, backgroundColor: colors.verde }, loading ? { backgroundColor: 'gray' } : {}]} onPress={() => navigation.navigate('Stack', { screen: 'RegisterUser' })}>
                <Text style={[stylesButton.title, loading ? { color: '#c5c5c5' } : {}]}>CADASTRE-SE GRÁTIS</Text>
            </TouchableOpacity>

        </View>
    )
}
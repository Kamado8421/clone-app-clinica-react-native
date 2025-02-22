import { View, Text, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputController from '../input-controller';
import { stylesButton } from '../submit-button/styles';
import colors from '../../config/colors';
import { useNavigation } from '@react-navigation/native';
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

    const handleAction = (data: any) => {
        props.setDataLogin(data)
        console.log('meu data aqui: ', data)
    }

    const navigation = useNavigation();

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

            <TouchableOpacity style={[stylesButton.button, { width: '100%', marginTop: 15 }]} onPress={handleSubmit(handleAction)}>
                <Text style={stylesButton.title}>ENTRAR</Text>
            </TouchableOpacity>

            <Text style={{ textAlign: 'center', fontWeight: 600 }}>OU</Text>

            <TouchableOpacity style={[stylesButton.button, { width: '100%', marginTop: 15, backgroundColor: colors.verde }]} onPress={() => navigation.navigate('Stack', {screen: 'RegisterUser'})}>
                <Text style={stylesButton.title}>CADASTRE-SE GRÁTIS</Text>
            </TouchableOpacity>

        </View>
    )
}
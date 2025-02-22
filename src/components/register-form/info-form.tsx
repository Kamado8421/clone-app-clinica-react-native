import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputController from '../input-controller';
import { stylesButton } from '../submit-button/styles';

const schema = yup.object(({
    email: yup.string().email('E-mail inválido').required('Informe seu endereço de e-mail'),
    password: yup.string().min(8, 'A senha não pode ter menos de 8 dígitos').required('Creie uma senha'),
    confirm_password: yup.string().min(8, 'Digite a senha corretamente para continuar').required('Creie uma senha'),
}))

interface PropsType {
    setDataInfo: Function;
}
export default function RegisterInfoForm(props: PropsType) {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const handleAction = (data: {email: string, password: string, confirm_password: string}) => {
        if(data.password !== data.confirm_password) return alert('A confirmação de senha precisa ser igual a senha');
        
        console.log(data);
        props.setDataInfo(data)
    }

    return (
        <ScrollView>
            <InputController
                control={control}
                dataName='email'
                typeInput='email-address'
                placeholder='Email*'
                errorMessage={`${errors.email?.message}`}
                isError={errors.email ? true : false}
            />
            <InputController
                control={control}
                dataName='password'
                placeholder='Senha*'
                errorMessage={`${errors.password?.message}`}
                isError={errors.password ? true : false}
                secureTextEntry={true}
            />
            <InputController
                control={control}
                dataName='confirm_password'
                placeholder='Confirmar Senha*'
                errorMessage={`${errors.confirm_password?.message}`}
                isError={errors.confirm_password ? true : false}
                secureTextEntry={true}
            />


            <TouchableOpacity style={stylesButton.button} onPress={handleSubmit(handleAction)}>
                <Text style={stylesButton.title}>COMPLETAR CADASTRO</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
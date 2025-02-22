import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputController from '../input-controller';
import { stylesButton } from '../submit-button/styles';

const schema = yup.object(({
    cpf: yup.string().min(11, 'Número de CPF incompleto').max(11, 'Há mais números que o padrão do CPF').required('Informe um número de CPF válido'),
    full_name: yup.string().required('Informe seu nome completo'),
    surname: yup.string().required('Informe seu apelido'),
    phone_number: yup.string().min(10, 'Informe seu número com DDD').max(11, 'Verifique a quantidade de dígitos').required('Informe seu número de telefone com DDD'),
    date_birth: yup.string().min(10, 'Use o padrão dd/mm/aaaa').max(10, 'Verifique a formatação da data').required('Informe seu número de telefone com DDD'),
    code: yup.string()
}))

interface PropsType {
    setDataUser: Function;
}
export default function RegisterUserForm(props: PropsType) {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const handleAction = (data: any) => {
        console.log(data);
        props.setDataUser(data)
    }

    return (
        <ScrollView>
            <InputController
                control={control}
                dataName='cpf'
                typeInput='numeric'
                placeholder='Informe seu CPF (somente números)*'
                errorMessage={`${errors.cpf?.message}`}
                isError={errors.cpf ? true : false}
            />
            <InputController
                control={control}
                dataName='full_name'
                placeholder='Nome Completo*'
                errorMessage={`${errors.full_name?.message}`}
                isError={errors.full_name ? true : false}
            />
            <InputController
                control={control}
                dataName='surname'
                placeholder='Como quer ser chamado?*'
                errorMessage={`${errors.surname?.message}`}
                isError={errors.surname ? true : false}
            />
            <InputController
                control={control}
                dataName='phone_number'
                typeInput='numeric'
                placeholder='Telefone*'
                errorMessage={`${errors.phone_number?.message}`}
                isError={errors.phone_number ? true : false}
            />
            <InputController
                control={control}
                dataName='date_birth'
                placeholder='Data de Nascimento (dd/mm/aaaa)*'
                errorMessage={`${errors.date_birth?.message}`}
                isError={errors.date_birth ? true : false}
            />
            <InputController
                control={control}   
                dataName='code'
                placeholder='Código de inscrição (Opcional)'
                errorMessage={`${errors.code?.message}`}
                isError={errors.code ? true : false}
            />

            <TouchableOpacity style={stylesButton.button} onPress={handleSubmit(handleAction)}>
                <Text style={stylesButton.title}>PRÓXIMO</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
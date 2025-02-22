import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputController from '../input-controller';
import { stylesButton } from '../submit-button/styles';

const schema = yup.object(({
    cep: yup.string().min(8, 'cep incompleto').max(9, 'Verifique a quantidade de dígitos').required('Infome o CEP da cidade'),
    state: yup.string().required('Informe Estado'),
    cityName: yup.string().required('Informe sua  cidade'),
    address: yup.string().required('Informe seu endereço'),
    number: yup.string().required('Informe o número da sua casa (Se não tiver, dígite zero)'),
    neighborhood: yup.string().required('Informe o nome do seu bairro'),
    complement: yup.string(),
}))

interface PropsType {
    setDataAddress: Function;
}
export default function RegisterAddressForm(props: PropsType) {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const handleAction = (data: any) => {
        console.log(data);
        props.setDataAddress(data)
    }

    return (
        <ScrollView>
            <InputController
                control={control}
                dataName='cep'
                placeholder='CEP*'
                typeInput='numeric'
                errorMessage={`${errors.cep?.message}`}
                isError={errors.cep ? true : false}
            />
            <InputController
                control={control}
                dataName='state'
                placeholder='Informe o Estado*'
                errorMessage={`${errors.state?.message}`}
                isError={errors.state ? true : false}
            />
            <InputController
                control={control}
                dataName='cityName'
                placeholder='Informe a cidade*'
                errorMessage={`${errors.cityName?.message}`}
                isError={errors.cityName ? true : false}
            />
            <InputController
                control={control}
                dataName='address'
                placeholder='Endereço*'
                errorMessage={`${errors.address?.message}`}
                isError={errors.address ? true : false}
            />
            <InputController
                control={control}
                dataName='number'
                placeholder='Número*'
                errorMessage={`${errors.number?.message}`}
                isError={errors.number ? true : false}
                typeInput='numeric'
            />
            <InputController
                control={control}   
                dataName='neighborhood'
                placeholder='Bairro*'
                errorMessage={`${errors.neighborhood?.message}`}
                isError={errors.neighborhood ? true : false}
            />

            <InputController
                control={control}   
                dataName='complement'
                placeholder='Complemento'
                errorMessage={`${errors.complement?.message}`}
                isError={errors.complement ? true : false}
            />

            <TouchableOpacity style={stylesButton.button} onPress={handleSubmit(handleAction)}>
                <Text style={stylesButton.title}>PRÓXIMO</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
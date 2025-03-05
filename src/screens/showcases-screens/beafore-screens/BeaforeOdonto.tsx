import { View } from 'react-native';
import NextPage from '../../../components/showcase-next-page';
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';

export default function BeaforeOdonto() {

    const navigation = useNavigation<any>();

    const actionButtons = (screenName: string) => {
        navigation.navigate('Stack', { screen: screenName })
    }

    const buttons = [
        { icon: 'zap', title: 'Consultas', bgColor: colors.azulEscuro, action: () => actionButtons('BeaforeOdontoConsultasScreen') },
        { icon: 'shopping-bag', title: 'Exames', bgColor: colors.vermelhoBase, action: () => actionButtons('ExamesOdontoScreen') },
        { icon: 'shopping-bag', title: 'procedimentos', bgColor: colors.verde, action: () => actionButtons('ProcedimentoOdontoScreen') },
    ]

    return (
        <View style={{ flex: 1 }}>
            <NextPage
                image='im'
                header='HeaderTitle'
                title='Qual serviço você procura?'
                buttons={buttons}
            />
        </View>

    )
}
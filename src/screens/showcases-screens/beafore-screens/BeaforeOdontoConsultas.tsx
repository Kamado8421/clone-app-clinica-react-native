import { View } from 'react-native';
import NextPage from '../../../components/showcase-next-page';
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';

export default function BeaforeOdontoConsultas() {

    const navigation = useNavigation<any>();

    const actionButtons = (screenName: string) => {
        navigation.navigate('Stack', { screen: screenName })
    }

    const buttons = [
        { icon: 'zap', title: 'Nome do dentista', bgColor: colors.azulEscuro, action: () => actionButtons('ShowPricesScreen') },
        { icon: 'shopping-bag', title: 'Especialidade', bgColor: colors.vermelhoBase, action: () => actionButtons('CirurgiasScreen') },
        { icon: 'shopping-bag', title: 'Local Atendimento', bgColor: colors.verde, action: () => actionButtons('CirurgiasScreen') },
        { icon: 'shopping-bag', title: 'Área de Atuação', bgColor: colors.azulClaro, action: () => actionButtons('CirurgiasScreen') },
    ]

    return (
        <View style={{ flex: 1 }}>
            <NextPage
                image='im'
                header='HeaderTitle'
                titleHeader='Agendar Consulta'
                title='Como prefere fazer sua consulta?'
                buttons={buttons}
            />
        </View>

    )
}
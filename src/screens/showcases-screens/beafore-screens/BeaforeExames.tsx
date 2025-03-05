import { View } from 'react-native';
import NextPage from '../../../components/showcase-next-page';
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';

export default function BeaforeExames() {

    const navigation = useNavigation<any>();

    const actionButtons = (screenName: string) => {
        navigation.navigate('Stack', { screen: screenName })
    }

    const buttons = [
        { icon: 'zap', title: 'Exames Laboratoriais', bgColor: colors.azulEscuro, action: () => actionButtons('ShowPricesScreen') },
        { icon: 'zap', title: 'Exames de Imagem', bgColor: colors.vermelhoBase, action: () => actionButtons('AgendarExamesScreen') }
    ]

    return (
        <View style={{ flex: 1 }}>
            <NextPage
                image='im'
                header='HeaderLogo'
                titleHeader='Agendar Consulta'
                title='Que tipo de exame você procura?'
                buttons={buttons}
            />
        </View>

    )
}
import { View } from 'react-native';
import NextPage from '../../../components/showcase-next-page';
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';

export default function BeaforeShowPrices() {

    const navigation = useNavigation<any>();

    const actionButtons = (screenName: string) => {
        navigation.navigate('Stack', { screen: screenName })
    }

    const buttons = [
        { icon: 'zap', title: 'Exame e Procedimentos', bgColor: colors.vermelhoBase, action: () => actionButtons('ShowPricesScreen') },
        { icon: 'shopping-bag', title: 'Cirurgias', bgColor: colors.azulClaro, action: () => actionButtons('ShowPricesScreen') },
    ]

    return (
        <View style={{ flex: 1 }}>
            <NextPage
                image='im'
                title='O que você procura?'
                buttons={buttons}
            />
        </View>

    )
}
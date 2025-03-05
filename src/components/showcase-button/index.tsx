import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AlertExternalLinking } from '../../services';

export interface PropsTypeDisplayButton {
    iconName: "consultas" | 'procedimento' | 'resultados_exames' | 'dolar' | 'chat' | 'atendimento' | 'exames' | 'cirurgia' | 'socorro' | 'check_up' | 'odonto' | 'vantagens';
    label: string;
}

const icons = {
    consultas: require('./icons/consultas.png'),
    procedimento: require('./icons/procedimento.png'),
    resultados_exames: require('./icons/resultados_exames.png'),
    dolar: require('./icons/dolar.png'),
    chat: require('./icons/chat.png'),
    atendimento: require('./icons/atendimento.png'),
    exames: require('./icons/exames.png'),
    cirurgia: require('./icons/cirurgia.png'),
    socorro: require('./icons/socorro.png'),
    check_up: require('./icons/check-up.png'),
    odonto: require('./icons/odonto.png'),
    vantagens: require('./icons/vantagens.png'),
}

export default function ShowcaseButton(props: PropsTypeDisplayButton) {

    const navigation = useNavigation<any>();

    const handlePress = () => {
        switch (props.iconName.toLocaleLowerCase()) {
            case 'check_up':
                navigation.navigate('Stack', { screen: 'CheckUpScreen' });
                break;
            case 'cirurgia':
                navigation.navigate('Stack', { screen: 'CirurgiasScreen' });
                break;
            case 'dolar':
                navigation.navigate('Stack', { screen: 'BeaforeShowPricesScreen' });
                break;
            case 'odonto':
                navigation.navigate('Stack', { screen: 'BeaforeOdontoScreen' });
                break;
            case 'exames':
                navigation.navigate('Stack', { screen: 'BeaforeExamesScreen' });
                break;
            case 'chat': case 'resultados_exames':
                AlertExternalLinking();
                break;
            default:
                console.log('Screen not exists')
        }
    }

    return (
        <TouchableOpacity onPress={handlePress} style={styles.boxButton}>
            <View style={styles.align}>
                <Image
                    source={icons[props.iconName]}
                    style={styles.icon}
                />
                <Text style={styles.labelButton}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    )
}
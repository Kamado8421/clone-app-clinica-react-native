import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import SimpleHeaderTitle from '../components/simple-header-title';

export interface VectorNameLoginRequired {
    name: 'calendar-card' | 'money-card' | 'profile-card' | 'working-card'
}


interface PropsType {
    vectorName: 'calendar_card' | 'money_card' | 'profile_card' | 'working_card';
    textMarketing: string;
    titlePage: string;
}


const cards = {
    calendar_card: require('../assets/calendar-card.png'),
    money_card: require('../assets/money-card.png'),
    profile_card: require('../assets/profile-card.png'),
    working_card: require('../assets/working-card.png'),
}

export default function LoginRequired({ vectorName, textMarketing, titlePage }: PropsType) {

    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <SimpleHeaderTitle title={titlePage}/>
            <Image
                source={cards[vectorName]}
                style={styles.vectorImage}
            />
            <Text style={styles.textMarketing}>{textMarketing}</Text>
            <View>
                <TouchableOpacity style={[styles.button, styles.bttnRegister]} onPress={() => navigation.navigate('Stack', {screen: 'RegisterUser'})}>
                    <Text style={styles.bttnText}>CADASTRE-SE GRÁTIS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.bttnLogin]} onPress={() => navigation.navigate('Stack', {screen: 'LoginUser'})}>
                    <Text style={styles.bttnText}>ENTRAR AGORA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        paddingHorizontal: 20
    },

    header: {
        marginTop: 30,
        padding: 15,
        borderBottomWidth: 1.5,
        borderBottomColor: '#bdbdbd',
        width: Dimensions.get('screen').width
    },

    titlePage: {
        fontSize: 20,
        fontWeight: 700,
        color: '#030209',
        textAlign: 'center'
    },

    vectorImage: {
        width: 230,
        height: 250,
        marginTop: 120,
        objectFit: 'contain'
    },

    textMarketing: {
        fontSize: 20,
        marginTop: 50,
        marginBottom: 30,
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    button: {
        width: 250,
        padding: 20,
        borderRadius: 5,
        marginBottom: 10,
    },

    bttnText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 700
    },

    bttnLogin: {
        backgroundColor: colors.vermelhoBase
    },
    bttnRegister: {
        backgroundColor: colors.verde
    },
});
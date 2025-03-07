import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import BackHeader from '../../components/back-header';
import CardParceirias from '../../components/card-parceirias';
import colors from '../../config/colors';

interface ParceiriasCardType {
    image: NodeRequire;
    companyName: string;
    description: string;
}

const parceirias: ParceiriasCardType[] = [
    { image: require('../../assets/working-card.png'), companyName: 'Beleza & Cia', description: 'Com o Clone Clínica você tem 50% de desconto em depilação a lases, 20% de desconto em spa e 10% de desconto em serviços de salão.' },
    { image: require('../../assets/working-card.png'), companyName: 'Beleza & Cia', description: 'Com o Clone Clínica você tem 50% de desconto em depilação a lases, 20% de desconto em spa e 10% de desconto em serviços de salão.' },
]

export default function Vantagens() {
    return (
        <ScrollView style={styles.container}>
            <BackHeader title='Clone Clínica Vantagens' />
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <View style={styles.welcomeBox}>
                    <Image
                        style={styles.welcomeImage}
                        source={require('../../assets/working-card.png')}
                    />
                    <View style={{flex: 1.7}}>
                        <Text style={styles.welcomeTitle}>O que é o Clone Clínica{'\n'}Vantagens?</Text>
                        <Text style={{fontSize: 14}} numberOfLines={0}>Uma vitrine fake de ofertas e descontos exclusivos para nossos usuários.
                        Para fazer parte do nosso Clube de Vantagens e ter acesso a todos os benefícios
                            é muito simples, basta fazer seu cadastro gratuito no nosso aplicativo ou site e
                            depois é só aproveitar os benefícios
                        </Text>
                    </View>
                </View>

                <Text style={{fontWeight: 700, fontSize: 20, marginTop: 20, marginBottom: 20}}>Parceirias Fictícias</Text>
                <View>
                    {parceirias.map((pcr, index) => (
                        <CardParceirias key={index} />
                    ))}
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    welcomeBox: {
        flexDirection: 'row',
        gap: 5,
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.10,
        elevation: 5,
        shadowRadius: 6,
        borderRadius: 10,
        alignItems: 'center',
    },

    welcomeTitle: {
        color: colors.azulClaro,
        fontWeight: 600,
        fontSize: 16
    },

    welcomeImage: {
        flex: 1,
        height: 200,
        width: 80,
        objectFit: 'contain'
    }
})
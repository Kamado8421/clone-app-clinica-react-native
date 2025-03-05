import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import BackHeader from '../../components/back-header';
import CardParceirias from '../../components/card-parceirias';

interface ParceiriasCardType {
    image: NodeRequire;
    companyName: string;
    description: string;
}

const parceirias: ParceiriasCardType[] = [
    { image: require(''), companyName: 'Beleza & Cia', description: 'Com o Clone Clínica você tem 50% de desconto em depilação a lases, 20% de desconto em spa e 10% de desconto em serviços de salão.' }
]

export default function Component() {
    return (
        <ScrollView style={style.container}>
            <BackHeader title='Clone Clínica Vantagens' />
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <View>
                    <Image
                        source={require('../../assets/working-card.png')}
                    />
                    <View>
                        <Text>O que é o Clone Clínica{'\n'}Vantagens?</Text>
                        <Text>Uma vitrine fake de ofertas e descontos exclusivos para nossos usuários.
                            Para fazer parte do nosso Clube de Vantagens e ter acesso a todos os benefícios
                            é muito simples, basta fazer seu cadastro gratuito no nosso aplicativo ou site e
                            depois é só aproveitar os benefícios
                        </Text>
                    </View>
                </View>

                <Text>Parceirias Fictícias</Text>
                {parceirias.map((pars, index) => {
                    <CardParceirias
                    key={index}
                />
                })}

            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
})
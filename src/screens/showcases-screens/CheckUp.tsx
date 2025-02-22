import { View, Text, StyleSheet, BackHandler } from 'react-native';
import colors from '../../config/colors';
import BackHeader from '../../components/back-header';
import WhatsAppLinkingButton from '../../components/whatsapp-button';

interface PropsType {}
export default function CheckUp(props: PropsType){

    const checkUps = []

    return (
        <View style={styles.container}>
            <BackHeader title='Escolha o Check-up'/>
            {checkUps.length < 1 ?<Text style={styles.textNotItemsFund}>Nenhum check-up encontrado.</Text> : null }
            <View style={styles.whatsAppBttn}>
                <WhatsAppLinkingButton contentText='parcial'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgCinze,
    },

    textNotItemsFund: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginTop: '95%'
    },

    whatsAppBttn: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        alignSelf: 'center',
    }
})
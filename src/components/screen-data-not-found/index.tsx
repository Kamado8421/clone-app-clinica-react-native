import { View, Text, StyleSheet, BackHandler } from 'react-native';
import colors from '../../config/colors';
import BackHeader from '../../components/back-header';
import WhatsAppLinkingButton from '../../components/whatsapp-button';
import SearchInput from '../search-input';

interface PropsType {
    hasSearch?: boolean;
    title: string;
    titleHeader: string
}
export default function ScreenDataNotFound({ hasSearch = false, title, titleHeader }: PropsType) {


    return (
        <View style={styles.container}>
            <BackHeader title={titleHeader} />
            {hasSearch && <SearchInput setInputValue={() => { }} inputValue='' />}
            <Text style={styles.textNotItemsFund}>{title}</Text>
            <View style={styles.whatsAppBttn}>
                <WhatsAppLinkingButton contentText='parcial' />
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
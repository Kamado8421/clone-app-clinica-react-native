import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../config/colors';

export const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        height: 90,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.10,
        elevation: 5,
        shadowRadius: 6
    },

    logo: {
        height: 60,
        width: 200,
        objectFit: 'contain',
        alignSelf: 'center',
        flex: 2,
        marginTop: 20
    },

    iconBack: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: colors.azulEscuro,
        top: 41,
        position: 'absolute',
        right: 20
    }
});
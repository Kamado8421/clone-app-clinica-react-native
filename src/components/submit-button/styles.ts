import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../config/colors';

export const stylesButton = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 600
    },

    button: {
        backgroundColor: colors.azulEscuro,
        borderRadius: 8,
        height: 56,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width - 20 ,
        marginTop: 10,
        marginBottom: 20
    }
});
import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../config/colors';

export const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        height: 60,
        top: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.10,
        elevation: 5,
        shadowRadius: 6,
        position: 'absolute',
        width: Dimensions.get('screen').width,
        left: 0,
        justifyContent: 'center',
        alignContent: 'center',
    },

    title: {
        fontSize: 20,
        color: colors.azulEscuro,
        fontWeight: 500,
        padding: 10,
        textAlign: 'center'
    }
});
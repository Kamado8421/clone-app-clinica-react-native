import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../config/colors';

export const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        padding: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.10,
        elevation: 5,
        shadowRadius: 6,
        marginTop: 25
    },

    icon: {
        marginLeft: 30
    },

    title: {
        fontSize: 20,
        color: colors.azulEscuro,
        fontWeight: 500
    }
});
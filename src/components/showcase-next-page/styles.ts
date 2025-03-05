import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    image: {
        width: 250,
        height: 250,
        objectFit: 'contain',
        marginTop: 75
    },

    title: {
        fontSize: 25,
        color: colors.azulEscuro,
        marginBottom: 40,
        marginTop: 50,
        fontWeight: 600
    },

    button: {
        width: '70%',
        paddingHorizontal: 30,
        height: 65,
        marginBottom: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
    }
});
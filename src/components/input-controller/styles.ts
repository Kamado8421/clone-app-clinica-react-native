import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export const styles = StyleSheet.create({
    input: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#000',
        width: '100%',
        marginTop: 10,
        borderRadius: 8,
        height: 55,
        color: '#000',
        backgroundColor: '#fff'
    },

    labelError: {
        color: colors.vermelhoBase,
        fontSize: 14,
        marginTop: 6,
    }
});
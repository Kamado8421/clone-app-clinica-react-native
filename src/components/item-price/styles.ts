import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 25,
        paddingRight: 10,
        gap: 15,
        marginTop: 20
    },

    checbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: 'black'
    },

    info: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },

    title: {
        fontSize: 16,
    },

    sinomny: {
        color: '#7b7b7b',
        fontSize: 14
    },

    priceText: {
        color: 'black',
        fontWeight: 700,
        fontSize: 16
    }
});
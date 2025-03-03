import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.10,
        elevation: 5,
        shadowRadius: 6,
        width: Dimensions.get('screen').width,
        backgroundColor: '#fff'
    },

    titlePage: {
        fontSize: 20,
        fontWeight: 700,
        color: '#030209',
        textAlign: 'center'
    },

});
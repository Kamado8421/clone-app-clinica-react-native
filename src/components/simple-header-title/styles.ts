import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        padding: 15,
        borderBottomWidth: 1.5,
        borderBottomColor: '#bdbdbd',
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
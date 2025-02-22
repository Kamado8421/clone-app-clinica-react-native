import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    area: {
        backgroundColor: '#fff',
        padding: 8,
        width: Dimensions.get('screen').width,
        borderBottomWidth: 1,
        borderBottomColor: '#7b7b7b'
    },

    inputArea: {
        borderRadius: 5,
        padding: 8,
        flexDirection: 'row',
        paddingHorizontal: 6,
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#e8e8e8'
    },

    input: {
        width: '100%',
        padding: 5,
    }
});
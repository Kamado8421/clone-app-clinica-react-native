import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    area: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.10,
        elevation: 5,
        shadowRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    image: {
        height: 100,
        width: 100,
        objectFit: 'contain',
        flex: 1
    }
});
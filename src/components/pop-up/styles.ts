import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backDrop: {
        backgroundColor: '#000000a6',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        zIndex: 10,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },

    popUpArea: {
        backgroundColor: 'white',
        width: '90%',
        height: 'auto',
        padding: 20,
        borderRadius: 12
    }
});
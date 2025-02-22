import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    area: {
        //width: '100%',
    },
    bttn: {
        backgroundColor: '#FFFFFF',
        height: 60,
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 12,
        alignItems: 'center',
        flexDirection: 'row'
    },

    titleBttn: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },

    contentBox: {
        backgroundColor: '#FFFFFF',
        padding: 5,
        marginTop: 5,
        marginBottom: 10,
        width: '96%',
        alignSelf: 'center',    
        borderBottomRightRadius: 10
    }
});
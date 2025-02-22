import { StyleSheet, Dimensions } from 'react-native'

const baseIcons = 50;
export const colorActiveArea = '#353265';
export const colorUnactiveArea = '#c8c8c8';

export const styles = StyleSheet.create({
    area: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        width: Dimensions.get('window').width,
    },

    rowIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width - 86,
    },

    areaIcons: {
        width: baseIcons,
        height: baseIcons,
        borderRadius: '50%',
        padding: 5,
        borderWidth: 3,
        borderColor: colorUnactiveArea,
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconAreaActive: {
        borderWidth: 3,
        borderColor: colorActiveArea
    },

    rowText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width - 100,
    },

    text: {
        color: colorUnactiveArea,
        fontSize: 12,
        textAlign: 'center'
    },

    textActive: {
        color: colorActiveArea
    },

    line: {
        height: 2,
        width: 42,
        backgroundColor: colorActiveArea
    },

    descForm: {
        fontSize: 16,
        fontWeight: 600,
        marginTop: 10,
        marginBottom: 10,
        color: 'black'
    }

})
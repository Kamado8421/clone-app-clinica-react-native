import { View, Text, StyleSheet, BackHandler, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import BackHeader from '../../components/back-header';
import { useState } from 'react';
import SearchInput from '../../components/search-input';

interface PropsType { }
export default function Cirurgias(props: PropsType) {

    const cirurgias = []
    const [screenShow, setScreenShow] = useState('cirurgias');
    const [search, setSearch] = useState('');

    const bttnActionStyles = {
        borderBottomWidth: 2,
        borderBottomColor: colors.vermelhoBase
    }

    const onChangeScreen = (screen: 'cirurgias' | 'meus-orcamentos') => {
        setScreenShow(screen)
    }

    return (
        <View style={styles.container}>
            <BackHeader title='Cirurgias' />
            <View style={styles.boxBttnScreens}>
                <TouchableOpacity onPress={() => onChangeScreen('cirurgias')} style={[styles.bttnScreen, screenShow == 'cirurgias' ? bttnActionStyles : {}]}>
                    <Text style={screenShow == 'cirurgias' ? { fontWeight: 500 } : {}}>CIRURGIAS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onChangeScreen('meus-orcamentos')} style={[styles.bttnScreen, screenShow == 'meus-orcamentos' ? bttnActionStyles : {}]}>
                    <Text style={screenShow == 'meus-orcamentos' ? { fontWeight: 500 } : {}}>MEUS ORÇAMENTOS</Text>
                </TouchableOpacity>
            </View>
            <SearchInput inputValue={search} setInputValue={setSearch}/>

            { screenShow == 'cirurgias' ? 
            <View>
                {cirurgias.length < 1 ? <View style={styles.error404}>

                    <Text style={styles.icon404}>⚠️</Text>
                    <Text style={styles.label404}>Não encontrado.</Text>
                    <Text style={styles.desc404}>Para exames ou procedimentos,{'\n'}clique no botão abaixo.</Text>

                    <TouchableOpacity onPress={() => alert('Site externo! :D')} activeOpacity={0.8} style={{backgroundColor: '#1260dc', padding: 10, borderRadius: 5, marginTop: 10}}>
                        <Text style={{color: 'white', textAlign: 'center'}}>EXAMES E PROCEDIMENTOS</Text>
                    </TouchableOpacity>

                </View> : null}

            </View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgCinze,
    },

    boxBttnScreens: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.10,
        elevation: 5,
        shadowRadius: 6,
        marginTop: 1,
        marginBottom: 1
    },

    bttnScreen: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    error404: {
        alignSelf: 'center',
        marginTop: '50%'
    },

    icon404: {
        fontSize: 60,
        textAlign: 'center',
    },

    label404: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center',
    },

    desc404: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
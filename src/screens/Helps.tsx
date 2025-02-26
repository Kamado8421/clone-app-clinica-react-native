import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import BackHeader from '../components/back-header';
import { useState } from 'react';
import SearchInput from '../components/search-input';
import MagicBox from '../components/magic-box';

interface PropsType { }
export default function Helps(props: PropsType) {

    const checkUps = [];
    const [search, setSearch] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((v) => !v);
    }

    return (
        <View style={styles.container}>
            <BackHeader title='Dúvidas Frequentes' />
            <SearchInput setInputValue={setSearch} inputValue={search} marginTop={3} />

            <MagicBox title='Empresa desse clone'>
                <Text>Somente um clone para fins educacionais</Text>
            </MagicBox>
            <MagicBox title='Sobre a Empresa'>
                <Text>Não há uma empresa envolvida</Text>
            </MagicBox>
            <MagicBox title='Pagamentos/Orçamentos'>
                <Text>...</Text>
            </MagicBox>
            <MagicBox title='Pagamentos/Orçamentos'>
                <Text>Nada a se agendar</Text>
            </MagicBox>

            <View style={styles.helpBox}>
                <Text style={styles.textHelpBox}>Ainda tem dúvidas?</Text>
                <TouchableOpacity style={styles.bttnLinkHelpBox} onPress={() => alert('Site externo')}>
                    <Text style={styles.textBttnLinkHelpBox}>Fale conosco</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgCinze,
    },

    helpBox: {
        backgroundColor: 'white',
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        bottom: 20,
        width: '90%',
        height: 65,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.10,
        elevation: 5,
        shadowRadius: 6,
        position: 'absolute',
        alignSelf: 'center'
    },

    textHelpBox: {
        fontWeight: 500
    },

    bttnLinkHelpBox: {
        backgroundColor: colors.azulClaro,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 35
    },

    textBttnLinkHelpBox: {
        color: 'white',
        fontSize: 12,
        fontWeight: 500
    }

})
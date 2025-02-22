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
        </View>
    )
}

const styles = StyleSheet.create({              
    container: {
        flex: 1,
        backgroundColor: colors.bgCinze,
    },

})
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import BackHeader from '../../components/back-header';
import { useState } from 'react';
import SearchInput from '../../components/search-input';

interface PropsType { }
export default function ShowPrices(props: PropsType) {

    const checkUps = [];
    const [search, setSearch] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((v) => !v);
    }

    return (
        <View style={styles.container}>
            <BackHeader title='Ver Preços' />
            <SearchInput setInputValue={setSearch} inputValue={search} marginTop={3} />
            <TouchableOpacity activeOpacity={0.8} onPress={toggleSwitch} style={styles.switchContainer}>
                <Switch
                    style={{ marginLeft: 10 }}
                    value={isEnabled}
                />
                <Text>Mostrar apenas os itens selecionados </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgCinze,
    },

    switchContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 10,
        padding: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.10,
        elevation: 5,
        shadowRadius: 6,
        alignItems: 'center'
    }
})
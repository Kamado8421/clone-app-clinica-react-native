import { View, Text, StyleSheet, Switch, TouchableOpacity, FlatList } from 'react-native';
import colors from '../../config/colors';
import BackHeader from '../../components/back-header';
import { useState } from 'react';
import SearchInput from '../../components/search-input';
import ItemPrice from '../../components/item-price';

const items: { id: number, price: number, title: string, sinomny?: string }[] = [
    { id: 1, price: 20, title: 'remédio diversificados', sinomny: 'Muitas coisas boas' },
    { id: 2, price: 20, title: 'remédio diversificados' },
    { id: 3, price: 20, title: 'remédio diversificados' },
    { id: 4, price: 20, title: 'remédio diversificados' },
    { id: 5, price: 20, title: 'remédio diversificados' },
    { id: 6, price: 20, title: 'remédio diversificados' },
    { id: 7, price: 20, title: 'remédio diversificados' },
    { id: 8, price: 20, title: 'remédio diversificados' },
    { id: 9, price: 20, title: 'remédio diversificados' },
    { id: 10, price: 20, title: 'remédio diversificados' },
    { id: 11, price: 20, title: 'remédio diversificados' },
]

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
            <TouchableOpacity activeOpacity={1} style={styles.switchContainer}>
                <Switch
                    style={{ marginLeft: 10 }}
                    value={isEnabled}
                />
                <TouchableOpacity activeOpacity={0.9} onPress={toggleSwitch}><Text>Mostrar apenas os itens selecionados </Text></TouchableOpacity>
            </TouchableOpacity>


            <FlatList
            style={{marginBottom: 5}}
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ItemPrice
                        price={item.price}
                        title={item.title}
                        sinomny={item?.sinomny}
                    />
                )}
            />

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
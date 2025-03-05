import { View, Text, StyleSheet, Switch, TouchableOpacity, FlatList } from 'react-native';
import colors from '../../config/colors';
import BackHeader from '../../components/back-header';
import { useEffect, useState } from 'react';
import SearchInput from '../../components/search-input';
import ItemPrice from '../../components/item-price';

export type CheckUPItem = { id: number, price: number, title: string, sinomny?: string }

const items: CheckUPItem[] = [
    { id: 1, price: 25, title: 'Paracetamol', sinomny: 'Tylenol, Cimegripe' },
    { id: 2, price: 30, title: 'Ibuprofeno', sinomny: 'Advil, Alivium' },
    { id: 3, price: 15, title: 'Dipirona' },
    { id: 4, price: 40, title: 'Omeprazol', sinomny: 'Gastrogel, Losec' },
    { id: 5, price: 50, title: 'Loratadina', sinomny: 'Claritin, Lorfast' },
    { id: 6, price: 60, title: 'Amoxicilina' },
    { id: 7, price: 22, title: 'Cetirizina' },
    { id: 8, price: 35, title: 'Salbutamol', sinomny: 'Aerolin, Ventolin' },
    { id: 9, price: 18, title: 'Ácido Acetilsalicílico', sinomny: 'Aspirina, AAS' },
    { id: 10, price: 55, title: 'Ranitidina' },
    { id: 11, price: 45, title: 'Metformina', sinomny: 'Glifage, Dimefor' },
    { id: 12, price: 33, title: 'Hidrocortisona' },
    { id: 13, price: 28, title: 'Clonazepam', sinomny: 'Rivotril, Clopam' },
    { id: 14, price: 75, title: 'Losartana' },
    { id: 15, price: 48, title: 'Atorvastatina', sinomny: 'Lipitor, Torvacard' },
    { id: 16, price: 20, title: 'Antisséptico Bucal', sinomny: 'Listerine, Plax' },
    { id: 17, price: 38, title: 'Pomada para Assaduras', sinomny: 'Bepantol, Hipoglós' },
    { id: 18, price: 29, title: 'Colírio Lubrificante' },
    { id: 19, price: 70, title: 'Insulina', sinomny: 'Humulin, Novolin' },
    { id: 20, price: 90, title: 'Antialérgico', sinomny: 'Polaramine, Alektos' },
]

interface PropsType { }
export default function ShowPrices(props: PropsType) {

    const [search, setSearch] = useState('');
    const [checkUps, setCheckUps] = useState<CheckUPItem[]>([]);
    const [checkUpsSearch, setCheckUpsSearch] = useState<CheckUPItem[]>([]);
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((v) => !v);
    }

    const addCheckUps = (id: number) => {
        const item = items.find(i => i.id === id);
        let cacheItems = checkUps;
        if (item) {
            cacheItems?.push(item);
            setCheckUps(cacheItems);
        }

    }

    const removeCheckUps = (id: number) => {
        let cacheItems = checkUps.filter(i => i.id !== id);
        setCheckUps(cacheItems);
    }

    const searchChechUp = (txt: string) => {
        const filterItems = items.filter(i => i.title.toLowerCase().includes(txt.toLowerCase()));
        setCheckUpsSearch(filterItems)
    }

    useEffect(() => {
        searchChechUp(search);
    }, [])

    return (
        <View style={styles.container}>
            <BackHeader title='Ver Preços' />
            <SearchInput setInputValue={searchChechUp} inputValue={search} marginTop={3} />
            <TouchableOpacity activeOpacity={1} style={styles.switchContainer}>
                <Switch
                    style={{ marginLeft: 10 }}
                    value={isEnabled}
                />
                <TouchableOpacity activeOpacity={0.9} onPress={toggleSwitch}><Text>Mostrar apenas os itens selecionados </Text></TouchableOpacity>
            </TouchableOpacity>


            <FlatList
                style={{ marginBottom: 5 }}
                // data={search !== '' ? checkUpsSearch : isEnabled ? checkUps : items}
                data={isEnabled ? checkUps : checkUpsSearch}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ItemPrice
                        filterSelect={isEnabled ? checkUps : []}
                        id={item.id}
                        price={item.price}
                        title={item.title}
                        sinomny={item?.sinomny}
                        setSelectedItem={addCheckUps}
                        removeCheckUps={removeCheckUps}
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
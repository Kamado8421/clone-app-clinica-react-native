import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import colors from '../../config/colors';
import { CheckBox } from 'react-native-elements'
import { useState } from 'react';
import { CheckUPItem } from '../../screens/showcases-screens/ShowPrices';

interface PropsType {
    title: string;
    sinomny?: string;
    price: number;
    id: number;
    filterSelect: CheckUPItem[];
    removeCheckUps: (id: number) => void;
    setSelectedItem: (id: number) => void;
}
export default function ItemPrice(props: PropsType) {

    const [checked, setChecked] = useState(false);

    const handleSelect = () => {
        setChecked(!checked);

        if (!checked) {
            props.setSelectedItem(props.id);
            console.log('Item de ID ', props.id)
        } else {
            props.removeCheckUps(props.id);
            console.log('Removido ', props.id)
        }
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity activeOpacity={1} onPress={() => handleSelect()}>
                <CheckBox
                    checkedIcon='check'
                    checked={checked}
                    checkedColor='green'
                    onPress={handleSelect}
                />
            </TouchableOpacity>
            <View style={styles.info}>
                <Text style={styles.title}>{props.title.toUpperCase()}</Text>
                {props.sinomny && <Text style={styles.sinomny}>Sinônimos: {props.sinomny}</Text>}
                <Text style={styles.priceText}>a partir de <Text style={{ color: colors.verde }}>R${props.price}</Text></Text>
            </View>
        </View>
    )
}
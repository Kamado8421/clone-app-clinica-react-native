import { View, Text } from 'react-native';
import { styles } from './styles';
import colors from '../../config/colors';

interface PropsType {
    title: string;
    sinomny?: string;
    price: number;
}
export default function ItemPrice(props: PropsType){
    return (
        <View style={styles.container}>
            <View style={styles.checbox}/>

            <View style={styles.info}>
                <Text style={styles.title}>{props.title.toUpperCase()}</Text>
                {props.sinomny && <Text style={styles.sinomny}>Sinônimos: {props.sinomny}</Text> }
                <Text style={styles.priceText}>a partir de <Text style={{color: colors.verde}}>R${props.price}</Text></Text>
            </View>
        </View>
    )
}
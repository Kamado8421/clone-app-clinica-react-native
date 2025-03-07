import { Image } from 'react-native';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface PropsType { 
    image?: NodeRequire
}
export default function CardParceirias(props: PropsType) {
    return (
        <View style={styles.area}>
            <Image 
                style={styles.image}
                source={require('../../assets/money-card.png')}
            />
            <View style={{flex: 1.7}}>
                <Text>Titulo</Text>
                <Text>Desc</Text>
            </View>
        </View>
    )
}
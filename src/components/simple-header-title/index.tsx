import { View, Text } from 'react-native';
import { styles } from './styles';

interface PropsType { 
    title: string
}
export default function SimpleHeaderTitle(props: PropsType) {
    return (
        <View style={styles.header}>
            <Text style={styles.titlePage}>{props.title}</Text>
        </View>
    )
}
import { View, Text } from 'react-native';
import { styles } from './styles';

interface PropsType {
    title: string;
}
export default function HeaderForTabs(props: PropsType) {
    return (
        <View style={{marginBottom: 80}}>
            <View style={styles.header}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    )
}
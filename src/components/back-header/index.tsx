import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';

interface PropsType {
    title: string;
}
export default function BackHeader(props: PropsType) {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name='arrow-left' size={25} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}
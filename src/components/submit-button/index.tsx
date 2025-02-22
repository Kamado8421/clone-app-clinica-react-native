import { View, Text, TouchableOpacity } from 'react-native';
import { stylesButton as styles } from './styles';

interface PropsType {
    title: string;
    handleAction: Function;
};

export default function SubmitButton(props: PropsType){
    return (
        <TouchableOpacity onPress={() => props.handleAction} style={styles.button}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}
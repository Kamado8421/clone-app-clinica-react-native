import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import colors from '../../config/colors';

interface PropsType {
    title: string;
    children: any;
}
export default function MagicBox(props: PropsType) {

    const [isOpend, setIsOpend] = useState(false);

    const toggleBttn = () => {
        setIsOpend(v => !v);
    }

    return (
        <View style={styles.area}>
            <TouchableOpacity activeOpacity={0.7} onPress={toggleBttn} style={styles.bttn}>
                <Text style={styles.titleBttn}>{props.title}</Text>
                <Feather name={isOpend ? 'chevron-down' : 'chevron-right'} size={20} color={colors.azulClaro} />
            </TouchableOpacity>
            {isOpend && 
            <View style={styles.contentBox}>
                {props.children}
            </View>}
        </View>
    )
}
import { Feather } from '@expo/vector-icons';
import { View, Text, TextInput } from 'react-native';
import colors from '../../config/colors';
import { styles } from './styles';
import { useState } from 'react';

interface PropsType {
    setInputValue: Function;
    inputValue?: string;
    marginTop?: number
}
export default function SearchInput(props: PropsType) {

    const [value, setValue] = useState('');
    
    const onChange = (txt: string) => {
        setValue(txt)
        props.setInputValue(txt)
    }

    return (
        <View style={[styles.area, {marginTop: props.marginTop || 0}]}>
            <View style={styles.inputArea}>
                <Feather name='search' color={'#818181'} size={15} />
                <TextInput
                    value={value}
                    onChangeText={(txt) => onChange(txt)}
                    placeholder='Pesquisar'
                    placeholderTextColor={colors.azulEscuro}
                    style={styles.input}
                    underlineColorAndroid={'transparent'}
                />
            </View>
        </View>
    )
}
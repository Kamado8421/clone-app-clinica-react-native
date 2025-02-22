import { View, Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form'
import { styles } from './styles';


interface PropsType {
    control: any;
    dataName: string;
    placeholder: string;
    secureTextEntry?: boolean;
    isError?: boolean;
    errorMessage?: string;
    typeInput?: 'email-address' | 'default' | 'numeric';
}
export default function InputController(props: PropsType) {
    return (
        <View>
            <Controller
                control={props.control}
                name={props.dataName}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        keyboardType={props.typeInput || 'default'}
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={props.placeholder}
                        secureTextEntry={props.secureTextEntry || false}
                    />
                )}
            />
            {props.isError && <Text style={styles.labelError}>{props.errorMessage}</Text>}
        </View>
    )
}
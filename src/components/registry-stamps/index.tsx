import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles, colorUnactiveArea, colorActiveArea } from './styles'

interface PropsType {
    stamp: 1 | 2 | 3 | number 
}
export default function RegistryStamps(props: PropsType) {

    let desc = 'Etapa Inválida';

    if (props.stamp === 1) desc = 'Preencha os campos abaixo para se cadastrar'
    else if (props.stamp === 2) desc = 'Preencha os campos abaixo com dados de endereço'
    else if (props.stamp === 3) desc = 'Preencha os campos abaixo para se cadastrar'

    const iconSize = 25;

    return (
        <View style={styles.area}>
            <View style={styles.rowIcons}>
                <View style={[styles.areaIcons, props.stamp == 1 ? styles.iconAreaActive : {}]}>
                    <Feather name='user' color={props.stamp == 1 ? colorActiveArea : colorUnactiveArea} size={iconSize} />
                </View>

                <View style={styles.line}/>

                <View style={[styles.areaIcons, props.stamp == 2 ? styles.iconAreaActive : {}]}>
                    <Feather name='map'  color={props.stamp == 2 ? colorActiveArea : colorUnactiveArea} size={iconSize} />
                </View>

                <View style={styles.line}/>

                <View style={[styles.areaIcons, props.stamp == 3 ? styles.iconAreaActive : {}]}>
                    <Feather name='mail' color={props.stamp == 3 ? colorActiveArea : colorUnactiveArea} size={iconSize} />
                </View>
            </View>
            <View style={styles.rowText}>
                <Text style={[styles.text, props.stamp == 1 ? styles.textActive : {}]}>Dados{'\n'}Pessoais</Text>
                <Text style={[styles.text, props.stamp == 2 ? styles.textActive : {}]}>Dados{'\n'}Endereço</Text>
                <Text style={[styles.text, props.stamp == 3 ? styles.textActive : {}]}>Criar{'\n'}Senha</Text>
            </View>

            <Text style={styles.descForm}>{desc}</Text>
        </View>
    )
}

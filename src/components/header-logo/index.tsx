import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface PropsType { 
    showBackButton?: boolean
}
export default function HeaderLogo({showBackButton}: PropsType) {

    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />

            { showBackButton && <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} style={styles.iconBack}>
                <Feather name='x' size={20} color={'white'}/>
            </TouchableOpacity>}

        </View>
    )
}
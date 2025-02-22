import { View, Image } from 'react-native';
import { styles } from './styles';

interface PropsType { }
export default function HeaderLogo(props: PropsType) {
    return (
        <View style={styles.header}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />

        </View>
    )
}
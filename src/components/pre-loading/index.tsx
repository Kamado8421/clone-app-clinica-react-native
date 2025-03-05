import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';

interface PropsType {}
export default function Loading(props: PropsType){
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'red'}/>
        </View>
    )
}
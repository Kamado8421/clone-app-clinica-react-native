import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface PropsType {
    children: any;
    stateON: boolean;
    setStateON: Function;
}
export default function PopUp(props: PropsType) {


    if (props.stateON) return (
        <View style={styles.backDrop}>
            <View style={styles.popUpArea}>
                <TouchableOpacity onPress={() => props.setStateON(false)} >
                    <Feather name='x' size={30} color={'black'} style={{ textAlign: 'right' }} />
                </TouchableOpacity>

                { props.children }
                
            </View>
        </View>
    )

    else return <></>


}
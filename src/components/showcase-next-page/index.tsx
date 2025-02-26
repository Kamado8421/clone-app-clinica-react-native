import { View, Text, Image, TouchableOpacity, ViewProps } from 'react-native';
import { styles } from './styles';
import HeaderLogo from '../header-logo';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { PropsWithChildren } from 'react';

const images = {
    im: require('../../assets/calendar-card.png')
}
interface PropsType {
    image: 'im',
    title: string;
    buttons: {icon: any, title: string, bgColor: string, action: Function}[];
}
function NextPage(props: PropsType){

    //const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <HeaderLogo showBackButton/>
            <Image 
                source={images[props.image]}
                style={styles.image}
            />

            <Text style={styles.title}>{props.title}</Text>

            {props.buttons.map((bttn, index) => (
                <TouchableOpacity onPress={() => bttn.action()} key={index} style={[styles.button, {backgroundColor: bttn.bgColor}]}>
                    <Feather name={bttn.icon} color={'white'} size={25}/>
                    <Text style={{color: 'white', fontSize: 18}}>{bttn.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}


export default NextPage
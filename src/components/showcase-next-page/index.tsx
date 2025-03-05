import { View, Text, Image, TouchableOpacity, ViewProps } from 'react-native';
import { styles } from './styles';
import HeaderLogo from '../header-logo';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { PropsWithChildren } from 'react';
import SimpleHeaderTitle from '../simple-header-title';
import BackHeader from '../back-header';

const images = {
    im: require('../../assets/calendar-card.png')
}
interface PropsType {
    image: 'im',
    title: string;
    header: 'HeaderLogo' | 'HeaderTitle'
    titleHeader?: string
    buttons: {icon: any, title: string, bgColor: string, action: Function}[];
}
function NextPage(props: PropsType){
    
    return (
        <View style={styles.container}>
            {
                props.header === 'HeaderLogo' ? <HeaderLogo showBackButton/> :
                props.header === 'HeaderTitle' ? <BackHeader title={props.titleHeader || ''} /> : 
                null
            }
            <Image 
                source={images[props.image]}
                style={styles.image}
            />

            <Text style={styles.title}>{props.title}</Text>

            {props.buttons.map((bttn, index) => (
                <TouchableOpacity onPress={() => bttn.action()} key={index} style={[styles.button, {backgroundColor: bttn.bgColor}]}>
                    <Feather name={bttn.icon} color={'white'} size={25}/>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 600}}>{bttn.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}


export default NextPage
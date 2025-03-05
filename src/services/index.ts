import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export async function checkUser(setUser: Function) {
    const storedUser = await AsyncStorage.getItem("user");
    if (storedUser) {
        setUser(JSON.parse(storedUser));
    }

}

export async function removeUserStorage() {
    try {

        var user = null

        await AsyncStorage.removeItem('user');

        checkUser((value: object) => user = value);

        if(user){
            console.log('Ocorreu um erro ao limpar o usuário. Tentando novamente...');
            removeUserStorage();
        } else {
            console.log('Storage de usuário limpado com sucesso!')
        }
        
    } catch (error) {
        console.log('\n\nErro ao limpar storage: ')
        console.error(error);
    }
}


export function AlertExternalLinking(){
    Alert.alert('Site externo', 'Se você está lendo essa mensagem, significa que a ação que você tentou realizar, no app original, lhe redicionaria para um link externo ou para uma tela muito específica de conteúdo próprio.\n\nAção não replicada neste clone.')
 
}
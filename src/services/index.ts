import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

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
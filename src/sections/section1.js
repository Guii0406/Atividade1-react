import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Section1({nome, ra, date}){

    return(
        <View style={estilos.container}>
            <Text style={estilos.title}>Atividade 1</Text>
            <Text style={estilos.info}>Nome: {nome}.{"\n"}RA: {ra}.{"\n"}Data: {date}.</Text>


        </View>


    );
}


const estilos = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        padding: 16,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 15,
    },
    info: {
        fontWeight: 'bold',
        color: '#404040',
        fontSize: 18,
        lineHeight: 25
    }
   
})
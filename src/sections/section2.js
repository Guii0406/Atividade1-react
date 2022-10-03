import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Section2(){

    return(
        <View style={estilos.container}>

            <View style={estilos.quadradoVermelho}></View>
            <View style={estilos.quadradoVerde}></View>
            <View style={estilos.quadradoAzul}></View>

        </View>


    );
}
const redPosition = {
    x: 200,
    y: 150
}
const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    
    },
    quadradoVermelho: {
        width: 50,
        height: 50,
        backgroundColor: '#A20202',
        position: 'absolute',
        top: redPosition.y,
        left: redPosition.x,
        zIndex: 1
        
    },
    quadradoVerde: {
        width: 50,
        height: 50,
        backgroundColor: '#02FA2F',
        position: 'absolute',
        top: redPosition.y,
        left: redPosition.x - 10,
        zIndex: 2

    },
    quadradoAzul: {
        width: 50,
        height: 50,
        backgroundColor: '#00AAFF',
        position: 'absolute',
        top: redPosition.y + 40,
        left: redPosition.x, 
        zIndex: 0
    }
    
})

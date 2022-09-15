import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Section2(){

    return(
        <View style={estilos.container}>

            <View style={estilos.mid}>
                <View style={estilos.quadradoVermelho}></View>
                <View style={estilos.quadradoVerde}></View>
                <View style={estilos.quadradoAzul}></View>
            </View>

        </View>


    );
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    
    },
    mid:{
        borderStyle: "dashed",
        borderColor: 'black',
        borderWidth: 2,
        width: '70%',
        height: '70%'
    },
    quadradoVermelho: {
        width: 50,
        height: 50,
        backgroundColor: '#A20202',
        position: 'absolute',
        top: 0,
        zIndex: 1
        
    },
    quadradoVerde: {
        width: 50,
        height: 50,
        backgroundColor: '#02FA2F',
        position: 'absolute',
        top: 0,
        left: 10,
        zIndex: 2

    },
    quadradoAzul: {
        width: 50,
        height: 50,
        backgroundColor: '#00AAFF',
        position: 'absolute',
        top: 40,
        zIndex: 0
    }
    
})
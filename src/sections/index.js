import React from "react";
import { Text, StyleSheet } from "react-native";

import Section1 from './section1'
import Section2 from './section2'



export default function Index({section1, section2}){
    return(
    <>
        <Section1 {...section1} />
        <Section2  />
    </>

    );
}



import React, { useState } from "react";
import { View, Text, Image, Slider, StyleSheet, Button, Alert, TextInput } from "react-native";

function Tela2({route, navigation}){
    const {senha, senha2} = route.params;

    return(
        <View>
            <Text>Senhas Registradas</Text>
            <Text>Senha 1: {senha}</Text>
            <Text>Senha 2: {senha2}</Text>
        </View>
    )

}
export default Tela2;
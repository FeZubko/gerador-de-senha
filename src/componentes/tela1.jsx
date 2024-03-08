import React, { useState } from "react";
import { View, Text, Image, Slider, StyleSheet, Button, Alert, TextInput } from "react-native";


function Tela1({ navigation }) {
    const [tamanhoSenha, setTamanhoSenha] = useState(8);
    const geraSenha = () => {
        alert("Senha gerada com sucesso");
    };
    const [number, onChangeNumber] = React.useState('');
    return (
        <View style={Styles.box}>
            <Image source={require('../img/icone-cadeado.png')} style={Styles.logo} />
            <Text style={Styles.title}>{tamanhoSenha} caracteres </Text>
            <TextInput
                style={Styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Defina a quantidade de caracteres da senha"
                keyboardType="numeric"
            />
            <Button style={Styles.buttonGera} title="GERAR SENHA" onPress={geraSenha}></Button>
            <Button style={Styles.buttonTroca}
                title="Senhas"
                onPress={
                    () => {
                        navigation.navigate('tela2', {
                            senha:"123456ha",
                            senha2:"1234509876ddaabb"
                        })
                    }
                }
            ></Button>
        </View>
    );
}

const Styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#274135', // Cor de fundo verde escuro
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#ffffff', // Cor do texto branca
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#ffffff'
    },
    buttonTroca: {

    },
    buttonGera: {

    }
});

export default Tela1;
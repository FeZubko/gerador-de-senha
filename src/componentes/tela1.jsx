import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button, Alert, TextInput } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

function Tela1({ navigation }) {
    const [tamanhoSenha, setTamanhoSenha] = useState(8);
    const [senhaGerada, setSenhaGerada] = useState('');
    const geraSenha = () => {const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
        
        let novaSenha = '';

        for (let i = 0; i < tamanhoSenha; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            novaSenha += caracteres[randomIndex];
        }
        setSenhaGerada(novaSenha);
    };

    return (
        <View style={Styles.box}>
        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
            <Image source={require('../img/icone-cadeado.png')} style={Styles.logo} />
            <Text style={Styles.title}>{tamanhoSenha} caracteres </Text>
        </View>
        <View>
            <Slider value={tamanhoSenha} onValueChange={value => setTamanhoSenha(value)} maximumValue={16} minimumValue={1} step={1} />
        </View>

        <Button style={Styles.buttonGera} title="GERAR SENHA" onPress={geraSenha}></Button>
        <Text style={Styles.senhaGerada}>{senhaGerada}</Text>
        <Button style={Styles.buttonTroca}
            title="Senhas"
            onPress={() => {
                navigation.navigate('tela2', {
                    senha: "123456ha",
                    senha2: "1234509876ddaabb"
                })
            }}
        ></Button>
    </View>
    );
}

const Styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'stretch',
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
    senhaGerada: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center',
        marginVertical: 20,
    }
});

export default Tela1;

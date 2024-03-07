import React, { useState } from "react";
import { View, Text, Image, Slider, StyleSheet, Button, Alert } from "react-native";

function App() {
  const [tamanhoSenha, setTamanhoSenha] = useState(8);
  const geraSenha = () => {
    alert("Senha gerada com sucesso");
  };

  return (
    <View style={Styles.box}>
      <Image source={require('./assets/icone-cadeado.png')} style={Styles.logo}/>
      <Text style={Styles.title}>{tamanhoSenha} caracteres </Text>
      <Button title="GERAR SENHA" onPress={geraSenha}></Button>
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
});

export default App;

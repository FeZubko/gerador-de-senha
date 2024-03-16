import { StyleSheet, Text, View } from "react-native-web";
import Tela1 from "./src/componentes/tela1";
import Tela2 from "./src/componentes/tela2";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import config from "./src/database/config";
import { createConnection } from "typeorm";
import { useCallback, useEffect } from "react";

const Stack = createNativeStackNavigator();

function App() {

  const connect = useCallback(async () => {
    try {
      const connection = await createConnection(config);
      await connection.getRepository("Senha").save({
        senha: "123456rf"
      })
      const senha = await connection.getRepository("Senha").find();
      console.log(senha);
    } catch (err) {
      console.log(err)
    }
  })
  useEffect(() => {
    connect()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NovaTela">
        <Stack.Screen name="home" component={Tela1} />
        <Stack.Screen name="tela2" component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
import { StyleSheet, Text, View } from "react-native-web";
import Tela1 from "./src/componentes/tela1";
import Tela2 from "./src/componentes/tela2";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NovaTela">
        <Stack.Screen name="home" component={Tela1}/>
        <Stack.Screen name="tela2" component={Tela2}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
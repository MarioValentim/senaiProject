import { NavigationContainer}  from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLogin from "./TelaLogin";
import TelaTarefa from "./TelaTarefa";
import TelaCadastro from "./TelaCadastro";

const Stack = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela Login">
        <Stack.Screen name="Tela Login" component={TelaLogin} options={{headerShown: false}}/>
        <Stack.Screen name="Tela Tarefa" component={TelaTarefa} options={{headerShown: false}}/>
        <Stack.Screen name="Tela Cadastro" component={TelaCadastro} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import { View, 
         Text, 
         StyleSheet,
         TouchableOpacity, 
         Alert, 
         Image
        } from 'react-native';
import { TextInput } from "react-native-paper";
import { StatusBar } from 'expo-status-bar';

// TelaLogin
export default function TelaLogin({navigation}) {

var usuarioDigitado="";
var senhaDigitada="";
function fazerLogin(){
    if(usuarioDigitado == "Aluno" && senhaDigitada == "1234"){
        navigation.navigate("Tela Administrativa");
    }else{
        Alert.alert("Aviso", "Usuário e/ou senha incorreta")
    }
}

  return (
    <View style={estilos.container}>
       
      <View style={estilos.caixa1}>
           
        <View style={estilos.cxtitulo} >
         <Text style={estilos.titulo}>

            Login

        </Text>
        </View>
            <View style={estilos.cxLogin}>
                <TextInput
                    onChangeText={(texto)=>{usuarioDigitado=texto}}
                    mode="outlined"
                    style={{width: 300, marginBottom: 20 }}
                    label="usuario"/>
                    
                <TextInput
                    onChangeText={(texto)=>{senhaDigitada=texto}}
                    mode="outlined"
                    style={{width: 300, marginBottom: 50}}
                    label="senha"/>
                        
                <TouchableOpacity style={estilos.botao}
                    onPress={()=>{fazerLogin()}}>
                        <Text style={{
                            color: "white",
                            fontSize: 20
                        }}>
                            Entrar

                        </Text>

                 </TouchableOpacity>
                    
                <TouchableOpacity style={estilos.botao2}
                    onPress={()=>{navigation.navigate("Tela Cadastro")}}>
                        <Text style={{color:"white", fontSize: 20}}>

                            Não tenho conta
                            
                        </Text>
                </TouchableOpacity>
                        
            </View>
                <View>
                    <Image
                    source={require('./assets/logo_senai.png')}
                    >
                    </Image>    
                </View>
            
       
      </View>
     
                <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
    cxLogoSenai:{
       backgroundColor:"red"
    },
    logoSenai:{

    }, 
    cxLogin:{
    margin: 80
    },
    botao:{
        borderRadius: 20,
        padding: 20,
        backgroundColor: "#6079FF",
        alignItems: "center"

    },
    botao2:{
        alignItems: "center"
    },
    cxtitulo:{
       
        alignItems: "center",
        margin: 10   
    },
    titulo:{
        color: "white",
        fontSize: 40,
        marginTop: 80,
        
    },
    cxPrincipal:{
        width:"100%",
        height: "100%",
         backgroundColor: "#3850D2",
        alignItems: "center"
    },
    container: {
        flex: 1,
        
    },
});
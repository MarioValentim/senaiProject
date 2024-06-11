import { View, 
         Text, 
         StyleSheet, 
         TouchableOpacity, 
         Alert, 
         Image 
        } from 'react-native';
import { TextInput } from 'react-native-paper';
import Ionicon from "@expo/vector-icons/Ionicons";
import { StatusBar } from 'expo-status-bar';

export default function TelaTarefa({navigation}){
    return(
        <View style={estilos.container}>
        <View style={estilos.cxPrincipal}>
                <View style={estilos.titulo}>
                        <View>
                            <Text style={{color: "white", fontSize: 15}}>
                                Bem vindo,
                            </Text>
                            <Text style={{color: "white", fontSize: 20}}>
                                Fulano de tal
                            </Text>
                        </View>
                        <View style={estilos.tituloCirculo}>
                            <Ionicon name="person" size={30} 
                                     color={"gray"}/>
                        </View>
                </View>
                <View style={estilos.cxmeio}>
                    <View style={estilos.meioRequerimento}>
                        <Text style={{color: "white", fontSize: 15, 
                              alignItems:"center"}}>
                                Requerimentos
                        </Text>
                    </View>
                    <View style={estilos.meioNotas}>
                        <Text style={{color: "white",                   
                              fontSize: 15}}>
                                Notas
                        </Text>
                    </View>
                </View>  

                
                <View style={estilos.cxmeio2}>
                    <View style={estilos.meioFrequencia}>
                        <Text style={{color: "white", fontSize: 15, 
                              alignItems:"center"}}>
                                Frequência
                        </Text>
                    </View>
                <View style={estilos.meioAvaliacoes}>
                        <Text style={{color: "white", 
                              fontSize: 15}}>
                                Avaliações
                        </Text>
                    </View>
                </View>  
                
                
                <View style={estilos.cxmeio3}>
                    <View style={estilos.meioFinanceiro}>
                        <Text style={{color: "white", fontSize: 15, 
                              alignItems:"center"}}>
                                Financeiro
                        </Text>
                    </View>
                    <View style={estilos.meioDocumentos}>
                        <Text style={{color: "white", 
                              fontSize: 15}}>
                                Documentos
                        </Text>
                    </View>
                </View>  

            
            <View style={estilos.logo_senai}>
            <Image
            source={require("./assets/logo_senai.png")}/>
            </View>
        </View>

        <StatusBar style="auto" />
    </View>

);
}

const estilos = StyleSheet.create({
container:{
    flex: 1,

},
cxPrincipal:{
    backgroundColor: "#3850D2",
    height: "100%"

},
titulo:{
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 30,
    justifyContent: "space-between"

},
tituloCirculo:{
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40,
    width: 50,
    height: 50,
    borderRadius: 50

},
logo_senai:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "auto"
},
cxmeio:{
    flexDirection:"row"

},
meioRequerimento:{
    backgroundColor:"#6079FF",
    flexDirection:"Row",
    marginTop:"20%",
    width:"30%",
    height:"100%",
    marginLeft: 30,
    alignItems: "center",
    borderRadius: 10

},
meioNotas:{
    backgroundColor:"#6079FF",
    flexDirection:"Row",
    marginTop:"20%",
    width:"30%",
    height:"100%",
    marginLeft:70,
    alignItems: "center",
    borderRadius: 10

},
cxmeio2:{
     flexDirection:"row",
     marginTop:50
     
},
meioFrequencia:{
    backgroundColor:"#6079FF",
    flexDirection:"Row",
    marginTop:"20%",
    width:"30%",
    height:"100%",
    marginLeft: 30,
    alignItems: "center",
    borderRadius: 10

},
meioAvaliacoes:{
    backgroundColor:"#6079FF",
    flexDirection:"Row",
    marginTop:"20%",
    width:"30%",
    height:"100%",
    marginLeft:70,
    alignItems: "center",
    borderRadius: 10

},
cxmeio3:{
    flexDirection: "row",
    marginTop:50

},
meioFinanceiro:{
    backgroundColor:"#6079FF",
    flexDirection:"Row",
    marginTop:"20%",
    width:"30%",
    height:"100%",
    marginLeft: 30,
    alignItems: "center",
    borderRadius: 10
    
},
meioDocumentos:{
    backgroundColor:"#6079FF",
    flexDirection:"Row",
    marginTop:"20%",
    width:"30%",
    height:"100%",
    marginLeft:70,
    alignItems: "center",
    borderRadius: 10
}

});
import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Informacoes from './Informacoes';


const Stack = createNativeStackNavigator();

function Formulario ({navigation}){
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [itens, setItens] = useState([]);

   
 useEffect(() => {
    if (itens.length > 0) {
      navigation.navigate("Info",{ itens: itens });
    }
  }, [itens]);


  const handleEnviar = () => {
    const novoItem = {
      nome: nome,
      sobrenome: sobrenome,
      telefone: telefone,
      endereco: endereco,
    };
    setItens([...itens, novoItem]);
    setNome('');
    setSobrenome('');
    setTelefone('');
    setEndereco('');
    navigation.navigate("Info",{ itens: itens });
    
  };

  

  return (
    <ScrollView contentContainerStyle={Estilos.container}>

      <ScrollView contentContainerStyle={Estilos.jack}>
        <Image source={require('./assets/jack.png')} style={(Estilos.pumpkin)}/>
      </ScrollView>
      <Text style={Estilos.textTitle}>Nome:</Text>
      <TextInput
        value={nome} 
        
        onChangeText={(texto) => setNome(texto)}
        style={Estilos.textInput}
      />
      <Text style={Estilos.textTitle} >Sobrenome:</Text>
      <TextInput
        style={Estilos.textInput}
        value={sobrenome}
        onChangeText={(texto) => setSobrenome(texto)}
      />
      <Text style={Estilos.textTitle}>Telefone:</Text>
      <TextInput 
        style={Estilos.textInput}
        value={telefone}
        onChangeText={(texto) => setTelefone(texto)}
      />
      <Text style={Estilos.textTitle}>Endereço:</Text>
      <TextInput
        style={Estilos.textInput}
        value={endereco}
        onChangeText={(texto) => setEndereco(texto)}
      />
     

      <TouchableOpacity style={Estilos.botao} title="Enviar" onPress={handleEnviar}>
          <Image source={require('./assets/skull.png')} style={Estilos.imagemBotao} />
          <Text style={Estilos.textoBotao}>Clique aqui!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form" screenOptions={{
        headerStyle: {
          backgroundColor: '#d26f04',
        },
        headerTintColor: '#fffafa',
      }}>
        <Stack.Screen name="Form" component={Formulario} options={{ title: 'Halloween - Forms' }} />
        <Stack.Screen name="Info" component={Informacoes} options={
          {
            title: 'Halloween - Users informations',
            headerBackVisible: false }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Estilos = StyleSheet.create({
  container: {
    flexGrow: 5,
    padding: 50,
    backgroundColor: '#201b2c',
    
  },

  jack:{
    alignItems:'center'
  },


  textInput: {
    backgroundColor: '#263238',
    borderWidth: 0.5,
    borderColor: '#000000',
    color: '#ee9911',
    fontSize: 20,
    fontColor: '#ee9911',
    height: 45,
    width: '100%',
    borderRadius: 20,
    marginVertical: 10,
    textDecorationLine: 'none'
    
  },

  textTitle: {
    color: '#ff725e',
    fontSize: 20,
  },

pumpkin:{
        marginTop:-70,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 400, 
        
      

},


 botao: {
    backgroundColor: '#d26f04',
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  imagemBotao: {
    width: 60,
    height: 70,
    marginLeft: -50,
    marginBottom: 10
  },
  textoBotao: {
    color: '#201b2c',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems:'center',
    
  },



});

export default App;

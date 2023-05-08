import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';





const Informacoes = ({ route }) => {
  
  const { itens } = route.params;
  const navigation = useNavigation();
  return (
      
    <ScrollView contentContainerStyle={Estilos.container}>
          <ScrollView contentContainerStyle={Estilos.houseContainer}>
            <Image source={require('./assets/pumpkin.png')} style={(Estilos.pumpkin)}/>
          </ScrollView>
   
        {itens.map((item, index) => (
          <ListItem key={index} containerStyle={Estilos.listItem}>
            <ListItem.Content>
              <ListItem.Title style={{ color: '#ee9911' }}>{item.nome} {item.sobrenome}</ListItem.Title>
              <ListItem.Subtitle style={{ color: '#ee9911' }}>{item.telefone}</ListItem.Subtitle>
              <ListItem.Subtitle style={{ color: '#ee9911' }}>{item.endereco}</ListItem.Subtitle>
              
            </ListItem.Content>
            
          </ListItem>
        ))}

      <TouchableOpacity style={Estilos.botao}  title="Voltar"
        onPress={() => navigation.goBack()}>
          <Image source={require('./assets/skull.png')} style={Estilos.imagemBotao} />
          <Text style={Estilos.textoBotao}>Voltar!</Text>
      </TouchableOpacity>


      </ScrollView>
    
  );
};
 

const Estilos = StyleSheet.create({
  container: {
    flexGrow: 5,
    padding: 50,
    backgroundColor: '#201b2c',
    
  },

  listItem: {
    backgroundColor: '#201b2c',
    color: 'white',
    fontSize: 20,    
  },

botao: {
    backgroundColor: '#d26f04',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
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

  houseContainer:
  {
    alignItems:'center'
  },

  pumpkin:{
        marginTop:-100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 300, 
           

},


});



export default Informacoes;

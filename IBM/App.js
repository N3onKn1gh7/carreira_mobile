import react from "react";
import {View, StyleSheet, Text, Image } from "react-native";

import ibm from './assets/fotoIBM.jpg';
import foto from './assets/IMG_20220518_154329.jpg';

export default function App() {
  return (
    <View style= { estilos.container }>
      <Image style={ estilos.ibm } source={ ibm } />
      <Image style={ estilos.foto } source={ foto } />
    <View>
      <Text style={ estilos.titulo }>MARCOS SILVA</Text>
      <Text style={ estilos.texto }>Engenheiro de Software</Text>
    </View> 
    </View>
  );
}

const estilos = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1660FE',
    padding: 20,
  },

  ibm: {
    width: 350,
    height: 150,
    marginBottom: 20,
    
  },

  foto: {
    
    width: 150,
    height: 150,
    marginBottom: 0,
    borderRadius: 75,
  },

  titulo: {
    fontSize: 26,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  texto: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  }
});

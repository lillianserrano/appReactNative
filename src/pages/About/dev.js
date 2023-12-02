//About/dev
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {styles} from './styles';

let prgs ='https://www2.fiap.com.br/updown/shift/professor/A57F89E2-48ED-41ED-AC74-3A159D793D53.PNG';

export default function Dev(){
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Desenvolvedores</Text>
      <Text style={styles.name}>Elisangela Cardoso</Text>
      <Text style={styles.name}>Rafael Pereira</Text>
      <Text style={styles.name}>Lillian Serrano</Text>
      
      <Text style={styles.title}>Prog. para Dispositivos Móveis</Text>
      <Text style={styles.name}>Fatec Praia Grande</Text>
      <Text style={styles.name}>Prof. Me. Joseffe Barroso de Oliveira</Text>
      <Image style={styles.photo} source={{ uri: prgs }}/>
      
    </View>
  )
};
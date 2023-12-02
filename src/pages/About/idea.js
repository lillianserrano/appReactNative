//About/idea
import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import {styles} from './styles';


export default function Idea(){
  
    let imgCard = 'https://facilshopping.com.br/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/0/2/023731.jpg';

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Ideia</Text>
      <Text style={styles.name}>O Trunfo é um aplicativo para você criar cartas dos seus personagens favoritos do Universo Disney. </Text>
      <Text style={styles.name}> Cada personagem terá uma pontuação pelas suas características.
      Ao jogar com amigos, quem tiver a maior pontuação, vence a rodada. </Text>
      <Image style={styles.img} source={{ uri: imgCard }}/>
    </View>
  );
};

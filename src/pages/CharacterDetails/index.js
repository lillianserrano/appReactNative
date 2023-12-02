import React from 'react';
import { View, Text, Image, StyleSheet,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';
import {Screen} from '../NewCard/index'

export default function CharacterDetails({ route }) {
  const { character } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.characterImageBigger} source={{ uri: character.imageUrl }} />
      <Text style={styles.characterName}>{character.name}</Text>  

      <Text style={[styles.characterData,styles.title]}> Filmes, TV e Games</Text> 
      <Text style={styles.characterData}>{character.films}</Text>   
      <Text style={styles.characterData}> {character.tvShows}</Text> 
      <Text style={styles.characterData}> {character.videoGames}</Text>

      <Pressable style={styles.button} onPress={Screen}>Criar Card</Pressable>     
    </View>
  );
}
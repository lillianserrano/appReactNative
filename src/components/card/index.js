import React, { useState, useEffect }  from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage'


const Card = ({ route }) => {
  const { character } = route.params;
  const [heroism, setHeroism] = useState('');
  const [hallOfFame, setHallOfFame] = useState('');
  const [strength, setStrength] = useState('');
  const [intelligence, setIntelligence] = useState('');
  const navigation = useNavigation();

  const handleSaveValues = async () => {
    try {
      const newCard = {
        characterId: character._id,
        name: character.name,
        imageUrl: character.imageUrl,
        heroism: parseInt(heroism) || 0,
        hallOfFame: parseInt(hallOfFame) || 0,
        strength: parseInt(strength) || 0,
        intelligence: parseInt(intelligence) || 0,
      };

      const existingCards = await AsyncStorage.getItem('myCards');
      const parsedExistingCards = existingCards ? JSON.parse(existingCards) : [];

      parsedExistingCards.push(newCard);
  
      await AsyncStorage.setItem('myCards', JSON.stringify(parsedExistingCards));

      navigation.navigate('MyCards');
    } catch (error) {
      console.error('Error saving values:', error);
    }
  };

  return (  
    
    <View>
      <Text>{character.name}</Text>
      <Button title="Salvar" onPress={handleSaveValues} />
      <Image style={styles.characterImageBigger} source={{ uri: character.imageUrl }} />
      <Text style={styles.characterName}>{character.name}</Text>  
    </View>
  );
};

export default Card;

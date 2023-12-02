//CharacterList/index.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';
import api from '../../services/api'

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchCharacterData();
  }, []);

  const fetchCharacterData = async () => {
    try {
      const response = await api.get();
      setCharacters(response.data.data);
    } catch (error) {
      console.error('Error fetching character data:', error);
    }
  };

  const handleCharacterPress = (character) => {
    navigation.navigate('CharacterDetails', { character });
  };

 
  const renderCharacterItem = ({ item }) => (
    <TouchableOpacity style={styles.characterItem} onPress={() => handleCharacterPress(item)}>
      <Image style={styles.characterImage} source={{ uri: item.imageUrl }} />
      <Text style={styles.characterName}>{item.name}</Text>
    
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Selecione um personagem </Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderCharacterItem}
        style={styles.characterList}
      />
    </View>
  );
}

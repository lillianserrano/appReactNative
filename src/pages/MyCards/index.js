//MyCards/Index
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';

export default function MyCards(){
  const characters = [
  {
    name: 'Andy',
    intelligence: 20,
    strength: 10,
    energy: 20,
    size: 20,
    skill: 50,
    fame: 36,
    image: 'https://i.imgur.com/4y3mLZy.jpg',
  },
  {
    name: 'Buzz Lightyear',
    intelligence: 9,
    strength: 25,
    energy: 30,
    size: 15,
    skill: 40,
    fame: 60,
    image: 'https://i.imgur.com/9jXfCz8.jpg',
  },
];
<View style={styles.container}>
  <FlatList
    data={characters}
    keyExtractor={(item) => item.name}
    renderItem={({ item }) => <Card character={item} />}
    numColumns={2}
  />
</View>
}
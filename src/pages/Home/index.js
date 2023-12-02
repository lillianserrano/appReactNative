//Home/index
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';

//const image = 'https://i.insider.com/5f577f8be6ff30001d4e76a8?width=750&format=jpeg&auto=webp';
 //const image = 'https://i.pinimg.com/564x/28/73/2f/28732f794374a9d3a32a8115f6cb45ac.jpg';

const image = ' https://i.pinimg.com/564x/77/86/84/7786840835e5d1aa956d4c2494479bad.jpg';
export default function Home() {
  const navigation = useNavigation();
 
  function goCharacterList() {
    navigation.navigate('CharacterList');
  }
 
  function goAbout() {
    navigation.navigate('About');
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo1}>TRUNFO</Text>
      <Text style={styles.titulo2}>Bem-vindo ao nosso jogo!</Text>
      <Image source={{ uri: image }} style={styles.img} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={goCharacterList}
        >
          <Text style={styles.buttonText}>Personagens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={goAbout}
        >
          <Text style={styles.buttonText}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



 

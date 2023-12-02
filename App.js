// App.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, CharacterDetails, CharacterList, MyCards, About } from './src/components/pageImports/index'
import {card} from './src/components/card/index'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false }}/>
          <Stack.Screen name="MyCards" component={MyCards} />
          <Stack.Screen name="CharacterList" component={CharacterList} options={{title:'Home', headerStyle:{ backgroundColor: '#052566'},headerTintColor:'white'}} />
          <Stack.Screen name="CharacterDetails" component={CharacterDetails} options={{title:'Personagens', headerStyle:{ backgroundColor: '#052566'},headerTintColor:'white'}} />
          <Stack.Screen name="About" component={About} options={{title:'Home', headerStyle:{ backgroundColor: '#052566'},headerTintColor:'white'}} />
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

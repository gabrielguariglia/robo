import React from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import * as Speech from 'expo-speech';
import { View } from 'react-native-web';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Botao() {
  const [falando, setFalando] = useState(false)
  
    function falar(){
      
      let frase = document.getElementById("texto").value
      Speech.speak(frase, {
        language: 'pt',
        onStart: falaIniciada,
        onDone: falaFinalizada
      })
    }
    function parar(){
      Speech.stop()
    }
    const falaIniciada = () => {
      setFalando(true)
    }
    const falaFinalizada = () => {
      setFalando(false)
    }


  return (
    <View>
      <input id="texto" type="text" />
    <TouchableOpacity
      style={styles.botao}
      activeOpacity={.3}
      onPress={falar}
    >
      <Text style={styles.textoBotao}>
        Falar
      </Text>

      <Entypo 
      name="megaphone" 
      size={24} 
      color= {theme.cores.white}
      />
    </TouchableOpacity>
    </View>
  );
}
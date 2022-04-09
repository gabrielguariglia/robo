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
      //Pega o texto que foi digitado e coloca pro robo falar
      let frase = document.getElementById("texto").value
      Speech.speak(frase, {
        language: 'pt',
        onStart: falaIniciada,
        onDone: falaFinalizada
      })
    }
    const falaIniciada = () => {
      setFalando(true)
    }
    const falaFinalizada = () => {
      setFalando(false)
    }


  return (
      //Caixa de texto pra digitar o que sera falado
    <View>
      <input id="texto" type="text" />
    <TouchableOpacity
      activeOpacity={.3}
      onPress={falar}
      //Desabilita o botão enquanto o robo esta falando
      disabled={falando}
      style={styles.botao}
    >
      <Text style={styles.textoBotao}>
        Falar
      </Text>

      <Entypo 
      name="megaphone" 
      size={24} 
      color= {theme.cores.branco}
      />
    </TouchableOpacity>
    </View>
  );
}
import React from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Botao() {
  return (
    <TouchableOpacity
      style={styles.botao}
      activeOpacity={.3}
    >
      <Text style={styles.textoBotao}>
        Falar
      </Text>

      <Entypo 
      name="megaphone" 
      size={24} 
      color= {theme.colors.white}
      />
    </TouchableOpacity>
  );
}
import React from 'react';
import { Image } from 'react-native';
import { MotiImage } from 'moti'

import { styles } from './styles';
import fotoRobo from '../../../assets/robo.png';

export function FotoRobo() {
  return (
    <MotiImage // Animação do robo
    style={styles.imagem}
      source={fotoRobo}
      resizeMode="center"
      from={{ opacity: 0, translatey: -30 }}
      animate={{ opacity: 1, translatey: 0 }}
      transition={{ type: 'timing'}}
      duration={3000}
      delay={500}
    />
  );
}
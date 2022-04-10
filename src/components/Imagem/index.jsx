import React from 'react';
import { MotiImage } from 'moti'

import { styles } from './styles';
import fotoRobo from '../../../assets/robo.png';

export function FotoRobo() {
  return (
    <MotiImage // Animação do robo
    style={styles.imagem}
      source={fotoRobo}
      resizeMode="center"
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'timing'}}
      duration={5000}
      delay={1000}
    />
  );
}
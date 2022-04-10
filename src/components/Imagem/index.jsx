import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';
import fotoRobo from '../../../assets/robo.png';

export function FotoRobo() {
  return (
    <Image
    style={styles.imagem}
      source={fotoRobo}
      resizeMode="center"
    />
  );
}
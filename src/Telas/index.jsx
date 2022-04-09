import React from 'react';
import { View } from 'react-native';
import { Rodape } from '../components/Rodape';

import { styles } from './styles';

export function Robo() {
  return (
    <View style={styles.container}>
      <Rodape />
    </View >
  );
}
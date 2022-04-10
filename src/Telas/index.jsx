import React from 'react';
import { View, Image } from 'react-native';
import { Rodape } from '../components/Rodape';
import { FotoRobo } from '../components/Imagem';

import { styles } from './styles';

export function Robo() {
    return (
        <View style={styles.container}>
            <FotoRobo/>
            <Rodape />
        </View >
    );
}
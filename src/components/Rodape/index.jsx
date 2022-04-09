import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Botao } from '../Botao';

export function Rodape(props) {

    return (

        <View>
            <Text style={styles.descricao}>
                Digite para o robo falar!
            </Text>
            <View style={styles.rodape}>
                <Botao />
            </View>
        </View>
    );
}
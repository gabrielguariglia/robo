import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Botao } from '../Botao';

export function Rodape(props) {

    return (

        <View>
            <View style={styles.rodape}>

                <Botao />
            </View>
        </View>
    );
}
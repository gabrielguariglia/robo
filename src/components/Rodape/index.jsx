import React from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';

import { styles } from './styles';
import { Botao } from '../Botao';

export function Rodape(props) {

    return (

        <MotiView //animação do rodapé
            from={{ translateY: 30, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ type: 'timing' }}
            duration={5000}
            delay={1000}>
            <View>
                <Text style={styles.descricao}>
                    Digite para o robo falar!
                </Text>
                <View style={styles.rodape}>
                    <Botao />
                </View>
            </View>
        </MotiView>
    );
}
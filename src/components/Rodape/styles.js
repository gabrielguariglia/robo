import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  rodape: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  descricao: {
    fontFamily: theme.fontes.primary700,
    color: theme.cores.preto,
    fontSize: 21,
    lineHeight: 20,
    marginVertical: 10
  }
});